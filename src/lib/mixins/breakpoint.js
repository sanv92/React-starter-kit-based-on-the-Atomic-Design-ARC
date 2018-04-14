import { em } from 'polished'

/* eslint-disable no-magic-numbers */
const sizes = {
  mobile: `@media (max-width: ${em(767)})`,
  tablet: `@media (min-width: ${em(768)})`,
  desktop: `@media (min-width: ${em(1024)})`,
}

export const breakpoint = (type, cb = (b) => b) => cb(sizes[type])
