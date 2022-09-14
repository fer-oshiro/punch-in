import { Text, View } from 'dripsy'
import IconHoliday from './IconHoliday'
import IconWorked from './IconWorked'
import IconSent from './IconSent'

interface DayProps {
  day?: number
  date: Date
}

export function Day({ day, date }: DayProps) {
  const today = new Date()
  const isToday =
    day === today.getDate() && date.getMonth() === today.getMonth()
  const backgroundColor = isToday ? '$orange' : 'transparent'

  return (
    <View
      sx={{
        width: 45,
        height: 50,
        borderWidth: 1,
        borderColor: '$caramel',
        m: 1,
        borderRadius: 4,
      }}
    >
      {day && (
        <View
          sx={{
            width: '60%',
            alignSelf: 'flex-end',
            alignItems: 'flex-end',
            backgroundColor,
            borderRadius: 100,
            transform: [{ rotate: '-45deg' }],
          }}
        >
          <Text sx={{ fontSize: 10, p: 1, transform: [{ rotate: '45deg' }] }}>
            {day}
          </Text>
        </View>
      )}
      <View sx={{ width: '100%', p: 1, flexDirection: 'row' }}>
        {day && <IconHoliday />}
        {day && <IconWorked />}
        {day && <IconSent />}
      </View>
    </View>
  )
}
