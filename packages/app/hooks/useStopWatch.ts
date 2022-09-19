import { useState, useRef, useEffect } from 'react'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { KEY } from '../constants/key'
import dayjs from 'dayjs'

export type LapData = {
  time: string
  lap: number
}

const padStart = (num: number) => {
  return num.toString().padStart(2, '0')
}

const formatMs = (milliseconds: number) => {
  let seconds = Math.floor(milliseconds / 1000)
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(minutes / 60)

  minutes = minutes % 60
  seconds = seconds % 60

  const ms = Math.floor((milliseconds % 1000) / 10)

  let str = `${padStart(minutes)}:${padStart(seconds)}.${padStart(ms)}`

  if (hours > 0) {
    str = `${padStart(hours)}:${str}`
  }

  return str
}

export const useStopWatch = (date: Date) => {
  const { getItem, setItem } = useAsyncStorage(KEY + 'time')
  const [allValue, setAllValue] = useState({})
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [startTime, setStartTime] = useState<number>(0)
  const [timeWhenLastStopped, setTimeWhenLastStopped] = useState<number>(0)
  const [laps, setLaps] = useState<number[]>([])
  const [dataLoaded, setDataLoaded] = useState(false)

  const interval = useRef<ReturnType<typeof setInterval>>()

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getItem()
        const dataFormatted = JSON.parse(data ?? '') ?? {}
        setAllValue(dataFormatted)
        const dateFormatted = dayjs(date).format('YYYY-MM-DD')
        if (dataFormatted[dateFormatted]) {
          const { isRunning, timeWhenLastStopped, startTime, laps } =
            dataFormatted[dateFormatted]
          setIsRunning(isRunning)
          setTimeWhenLastStopped(parseInt(timeWhenLastStopped))
          setStartTime(startTime)
          setLaps(laps)
          const letInitialTime = isRunning ? startTime : Date.now()
          setTime(() => Date.now() - letInitialTime + timeWhenLastStopped)

        } else {
          reset()
        }
        setDataLoaded(true)
      } catch (e) {
        console.log('error loading persisted data', e)
        setDataLoaded(true)
      }
    }

    loadData()
  }, [date])

  useEffect(() => {
    const persist = async () => {
      try {
        const dateFormatted = dayjs(date).format('YYYY-MM-DD')
        const data = {
          ...allValue,
          [dateFormatted]: {
            timeWhenLastStopped,
            isRunning,
            startTime,
            laps,
          },
        }
        console.log(data[dateFormatted])

        const dataFormatted = JSON.stringify(data)
        await setItem(dataFormatted)
      } catch (e) {
        console.log('error persisting data')
      }
    }

    if (dataLoaded) {
      persist()
    }
  }, [timeWhenLastStopped, isRunning, startTime, laps, dataLoaded])

  useEffect(() => {
    if (startTime > 0) {
      interval.current = setInterval(() => {
        setTime(() => Date.now() - startTime + timeWhenLastStopped)
      }, 1)
    } else {
      if (interval.current) {
        clearInterval(interval.current)
        interval.current = undefined
      }
    }
  }, [startTime])

  const start = () => {
    setIsRunning(true)
    setStartTime(Date.now())
  }

  const stop = () => {
    setIsRunning(false)
    setStartTime(0)
    setTimeWhenLastStopped(time)
  }

  const reset = () => {
    setIsRunning(false)
    setStartTime(0)
    setTimeWhenLastStopped(0)
    setTime(0)
    setLaps([])
  }

  const lap = () => {
    setLaps((laps) => [time, ...laps])
  }

  let slowestLapTime: number | undefined
  let fastestLapTime: number | undefined

  const formattedLapData: LapData[] = laps.map((l, index) => {
    const previousLap = laps[index + 1] || 0
    const lapTime = l - previousLap

    if (!slowestLapTime || lapTime > slowestLapTime) {
      slowestLapTime = lapTime
    }

    if (!fastestLapTime || lapTime < fastestLapTime) {
      fastestLapTime = lapTime
    }

    return {
      time: formatMs(lapTime),
      lap: laps.length - index,
    }
  })

  return {
    start,
    stop,
    reset,
    lap,

    isRunning,
    time: formatMs(time),

    laps: formattedLapData,
    currentLapTime: laps[0] ? formatMs(time - laps[0]) : formatMs(time),
    hasStarted: time > 0,
    slowestLapTime: formatMs(slowestLapTime || 0),
    fastestLapTime: formatMs(fastestLapTime || 0),

    dataLoaded,
  }
}
