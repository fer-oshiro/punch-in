import dayjs from 'dayjs'

export function getArrayCalendar(date: Date) {
  const days = dayjs(date).daysInMonth()
  const firstDay = dayjs(date).startOf('month').day()
  const lastDay = 6 - dayjs(date).endOf('month').day() 

  const daysArray = Array.from({ length: days }, (_, i) => i + 1)
  const emptyDaysArray = Array.from({ length: firstDay }, () => null)
  const emptyLastDaysArray = Array.from({ length: lastDay }, () => null)

  const calendar = [...emptyDaysArray, ...daysArray,...emptyLastDaysArray]
  const result = calendar.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index/7)
  
    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }
  
    resultArray[chunkIndex].push(item)
  
    return resultArray
  }, [])
  return result
}
