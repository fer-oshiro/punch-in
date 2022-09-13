import { Text, View } from 'dripsy'

interface DayProps {
  day?: number
}

export function Day({ day }: DayProps) {
  return (
    <View sx={{ flexDirection: 'row', width: 45, height: 60, borderWidth: 1, borderColor: '$caramel', m:1, borderRadius: 4 }}>
      {day && <Text sx={{fontSize: 10}}>{day}</Text>}
    </View>
  )
}
