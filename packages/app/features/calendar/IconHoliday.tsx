import { useSx, View } from 'dripsy'
import { MaterialIcons } from '@expo/vector-icons'

export default function IconHoliday() {
  const sx = useSx()

  return (
    <View
      sx={{
        width: 15,
        height: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$purple.main',
        borderRadius: 2,
        mr: 1,
      }}
    >
      <MaterialIcons
        name="beach-access"
        style={sx({ color: '$purple.light', size: 12 })}
      />
    </View>
  )
}
