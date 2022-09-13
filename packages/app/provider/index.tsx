import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'
import * as dayjs from 'dayjs'
import 'dayjs/locale/pt-br' 
var duration = require('dayjs/plugin/duration')
dayjs.locale('pt-br')
dayjs.extend(duration)

export function Provider({ children }: { children: React.ReactNode }) {
  
  return (
    <NavigationProvider>
      <Dripsy>{children}</Dripsy>
    </NavigationProvider>
  )
}
