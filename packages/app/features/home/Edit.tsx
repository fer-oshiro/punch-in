import React from 'react'
import { Text, View, Pressable } from 'dripsy'
import { AntDesign } from '@expo/vector-icons'

interface Props {
  time: string
  id: string
  onPress: (id: string) => void
}

export default function Edit({time, id, onPress}: Props) {
  return (
    <View
      sx={{
        flexDirection: 'row',
        alignItems: 'stretch',
      }}
    >
      <View
        sx={{
          mr: 2,
          flex: 1,
          backgroundColor: '$white',
          borderRadius: 4,
          color: '$black',
          fontSize: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          sx={{
            color: '$black',
            fontSize: 24,
          }}
        >
          {time}
        </Text>
      </View>
      <Pressable onPress={() => onPress(id)}>
        <View sx={{ backgroundColor: '$white', p: 16, borderRadius: 4 }}>
          <AntDesign name="edit" size={24} color="$black" />
        </View>
      </Pressable>
    </View>
  )
}
