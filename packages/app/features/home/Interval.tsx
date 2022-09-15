import React from 'react'
import { Text } from 'dripsy'

interface Props {
  time: string
}

export default function Interval({ time }: Props) {
  return (
    <Text
      sx={{
        py: 16,
        my: 20,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '$maroon',
        borderRadius: 4,
        color: '$maroon',
      }}
    >
      Intervalo de {time}
    </Text>
  )
}
