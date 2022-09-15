import { DripsyProvider, makeTheme } from 'dripsy'

const theme = makeTheme({
  // https://www.dripsy.xyz/usage/theming/create
  colors:{
    $maroon:'#d1512d',
    $orange:'#f5c7a9',
    $beige:'#f5e8e4',
    $white:'#ffffff',
    $black:'#311f2a',
    $gray:'#5E5E5E',
    $background:'#F8F5F3',
    $caramel:'#daac9f',
    $green:{main:'#9aefcc', light: '#e3fff3' },
    $blue:{main:'#a0d8f0', light: '#dbf4ff' },
    $purple:{main:'#d7a0f0', light: '#f6e4ff' },
    $red:{main:'#f07786', light: '#ffd9dd' },
  },
  text: {
    p: {
      fontSize: 16,
    },
  },
  shadows: {
    md: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
    },
  },
})

export function Dripsy({ children }: { children: React.ReactNode }) {
  return (
    <DripsyProvider
      theme={theme}
      // this disables SSR, since react-native-web doesn't have support for it (yet)
      ssr
    >
      {children}
    </DripsyProvider>
  )
}
