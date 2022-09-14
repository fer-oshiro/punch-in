import { useSx, View } from 'dripsy'
import { Feather } from '@expo/vector-icons'

export default function IconSent() {
  const sx = useSx()

  return (
    <View
      sx={{
        width: 15,
        height: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$blue.main',
        borderRadius: 2,
        mr: 1,
      }}
    >
      <Feather
        name="check-circle"
        style={sx({ color: '$blue.light', size: 12 })}
      />
    </View>
    
  )
}
