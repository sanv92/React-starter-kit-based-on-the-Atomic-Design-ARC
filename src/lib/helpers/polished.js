import _rem from 'polished/lib/helpers/rem'
import { baseFontSize } from 'themes'


export em from 'polished/lib/helpers/em'

// Adapter
export const rem = (num) => _rem(num, baseFontSize)
