import dayjs from 'dayjs'
import { firstLetterUppercase } from './firstLetterUppercase'

export const weekArray = Array.from({ length: 7 }, (_, i) => i + 1).map(
  (weekDay) =>
    firstLetterUppercase(
      dayjs()
        .day(weekDay - 1)
        .format('ddd')
    )
)
