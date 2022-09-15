import React from 'react'
import { Text } from 'dripsy'
import { ImageBackground, ImageSourcePropType } from 'react-native'

interface Props {
  label: string
  time: string
  fontSizeLabel: number
  fontSizeTime: number
  img: ImageSourcePropType
}

export default function Timer({
  label,
  time,
  fontSizeLabel,
  fontSizeTime,
  img,
}: Props) {
  return (
    <ImageBackground
      source={img}
      resizeMode="stretch"
      style={{ alignItems: 'center' }}
    >
      <Text
        sx={{
          fontSize: fontSizeLabel,
          fontWeight: 'bold',
          pb: 2,
          color: '$gray',
        }}
      >
        {label}
      </Text>
      <Text sx={{ fontSize: fontSizeTime, color: '$maroon', pb: 20 }}>
        {time}
      </Text>
    </ImageBackground>
  )
}
