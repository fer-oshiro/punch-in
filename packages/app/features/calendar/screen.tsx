import React from 'react'
import dayjs from 'dayjs'
import { Text, useSx, View, H1, P, Row, Pressable } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import { firstLetterUppercase, getArrayCalendar } from '../../utils'
import { AntDesign } from '@expo/vector-icons'
import {Week} from './Week'

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
        p: 16,
        backgroundColor: '$background',
      }}
    >
      <View sx={{flexDirection:'row', alignItems:'center', alignSelf:'flex-start', minWidth: 300, justifyContent: 'space-between'}}>
        <AntDesign name="left" size={40} color="black"  style={{marginRight: 20}} onPress={handleSubtractMonth}/>
        <H1 sx={{ fontWeight: '800', color: '$black' }}>{monthFormatted}</H1>
        <AntDesign name="right" size={40} color="black" style={{marginLeft: 20}} onPress={handleAddMonth}/>
      </View>

      <Pressable onPress={handleSetToday} sx={{px: 20,py:10, backgroundColor: '$caramel', borderRadius: 4, alignSelf:'flex-end', m: 15}}>
        <Text>Hoje</Text>
      </Pressable>

      {arrayCalendar.map((week) => <Week key={week} week={week} />)}
  
    </View>
  )
}
