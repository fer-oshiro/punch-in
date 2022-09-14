import { Text, View } from 'dripsy'

interface WeekNameProps {
  children: string
}
export default function WeekName({ children }: WeekNameProps) {
  return (
    <View
      sx={{
        width: 45,
        m: 1,
      }}
    >
      <Text
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        {children}
      </Text>
    </View>
  )
}
