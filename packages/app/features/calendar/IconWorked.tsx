import { useSx, View } from 'dripsy'
import { Feather } from '@expo/vector-icons'

export default function IconWorked() {
  const sx = useSx()

  return (
    <View
      sx={{
        width: 15,
        height: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$green.main',
        borderRadius: 2,
        mr: 1,
      }}
    >
      <Feather
        name="check-circle"
        style={sx({ color: '$green.light', size: 12 })}
      />
    </View>
  )
}
