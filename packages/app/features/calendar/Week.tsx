import { View } from 'dripsy'
import { Day } from './Day'

interface WeekProps {
  week: number[]
  date: Date
}

export function Week({ week, date }: WeekProps) {
  return (
    <View sx={{ flexDirection: 'row' }}>
      {week.map((day, index) => (
        <Day key={index} day={day} date={date} />
      ))}
    </View>
  )
}
