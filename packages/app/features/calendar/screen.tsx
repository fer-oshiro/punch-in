import React from 'react'
import dayjs from 'dayjs'
import { Text, View, H1, Pressable } from 'dripsy'
import { firstLetterUppercase, getArrayCalendar, weekArray } from '../../utils'
import { AntDesign } from '@expo/vector-icons'
import { Week } from './Week'
import IconHoliday from './IconHoliday'
import IconWorked from './IconWorked'
import IconSent from './IconSent'
import WeekName from './WeekName'

export function CalendarScreen() {
  const [date, setDate] = React.useState(new Date())

  function handleAddMonth() {
    setDate(dayjs(date).add(1, 'month').toDate())
  }

  function handleSubtractMonth() {
    setDate(dayjs(date).subtract(1, 'month').toDate())
  }

  function handleSetToday() {
    setDate(new Date())
  }

  const month = dayjs(date).format('MMMM')
  const monthFormatted = firstLetterUppercase(month)

  const arrayCalendar = getArrayCalendar(date)

  return (
    <View
      sx={{
        flex: 1,
        alignItems: 'center',
        px: 16,
        backgroundColor: '$background',
      }}
    >
      <View
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'flex-start',
          minWidth: 300,
          justifyContent: 'space-between',
        }}
      >
        <AntDesign
          name="left"
          size={40}
          color="black"
          style={{ marginRight: 20 }}
          onPress={handleSubtractMonth}
        />
        <H1 sx={{ fontWeight: '800', color: '$black' }}>{monthFormatted}</H1>
        <AntDesign
          name="right"
          size={40}
          color="black"
          style={{ marginLeft: 20 }}
          onPress={handleAddMonth}
        />
      </View>

      <Pressable
        onPress={handleSetToday}
        sx={{
          px: 20,
          py: 10,
          backgroundColor: '$caramel',
          borderRadius: 4,
          alignSelf: 'flex-end',
          m: 15,
        }}
      >
        <Text>Hoje</Text>
      </Pressable>

      <View sx={{ flexDirection: 'row' }}>
        {weekArray.map((week) => (
          <WeekName key={week}>{week}</WeekName>
        ))}
      </View>

      <View sx={{ flex: 1 }}>
        {arrayCalendar.map((week) => (
          <Week key={week} week={week} date={date} />
        ))}
      </View>

      <View
        sx={{
          backgroundColor: '$white',
          borderRadius: 4,
          width: '100%',
          p: 2,
          m: 3,
          boxShadow: 'md',
        }}
      >
        <Text sx={{ fontSize: 20, pt: 1, pb: 3, fontWeight: 'bold' }}>
          Legenda
        </Text>
        <View sx={{ flexDirection: 'row', width: '100%', pb: 2 }}>
          <View
            sx={{ flexDirection: 'row', width: '50%', alignItems: 'center' }}
          >
            <IconWorked />
            <Text sx={{ fontSize: 12, ml: 2 }}>Trabalhado</Text>
          </View>

          <View
            sx={{ flexDirection: 'row', width: '50%', alignItems: 'center' }}
          >
            <IconHoliday />
            <Text sx={{ fontSize: 12, ml: 2 }}>Feriado / Folga</Text>
          </View>
        </View>
        <View sx={{ flexDirection: 'row', alignItems: 'center' }}>
          <IconSent />
          <Text sx={{ fontSize: 12, ml: 2 }}>Enviado</Text>
        </View>
      </View>
    </View>
  )
}
