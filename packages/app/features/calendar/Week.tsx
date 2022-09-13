import { View } from 'dripsy'
import { Day } from './Day'

interface WeekProps {
  week: number[]
}

export function Week({ week }: WeekProps) {
  return (
    <View sx={{ flexDirection: 'row' }}>
      {week.map((day, index) => (
        <Day key={index} day={day} />
      ))}
    </View>
  )
}
