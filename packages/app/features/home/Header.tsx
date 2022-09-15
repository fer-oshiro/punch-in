import React from 'react'
import { Text, View, Pressable } from 'dripsy'
import dayjs from 'dayjs'
import { AntDesign } from '@expo/vector-icons'

interface Props {
  handleSubtractDay: () => void
  handleAddDay: () => void
  handleSetToday: () => void
  date: Date
}

export default function Header({
  handleSubtractDay,
  handleAddDay,
  handleSetToday,
  date,
}: Props) {

  const dayFormatted = dayjs(date).format('DD')
  const weekDayFormatted = dayjs(date).format('dddd')
  const monthFormatted = dayjs(date).format('MMM').toUpperCase()

  return (
    <>
      <View
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'flex-start',
          minWidth: '100%',
          justifyContent: 'space-between',
          p: 20,
          backgroundColor: '$caramel',
        }}
      >
        <AntDesign
          name="left"
          size={40}
          color="white"
          style={{ marginRight: 20 }}
          onPress={handleSubtractDay}
        />
        <View
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '$background',
            borderRadius: 500,
            width: 120,
            height: 120,
          }}
        >
          <Text sx={{ fontWeight: '800', color: '$caramel', fontSize: 10 }}>
            {weekDayFormatted}
          </Text>
          <Text sx={{ color: '$black', fontSize: 40 }}>{dayFormatted}</Text>
          <Text sx={{ fontWeight: '800', color: '$caramel', fontSize: 10 }}>
            {monthFormatted}
          </Text>
        </View>
        <AntDesign
          name="right"
          size={40}
          color="white"
          style={{ marginLeft: 20 }}
          onPress={handleAddDay}
        />
      </View>
      <View
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '$background',
        }}
      >
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
      </View>
    </>
  )
}
