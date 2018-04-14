# Utils

### Deprecated
```js
import { deprecated } from 'lib/helpers'

const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string])

const columnProps = PropTypes.oneOfType([
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    push: deprecated(stringOrNumberProp, 'Please use the prop "order"'),
    pull: deprecated(stringOrNumberProp, 'Please use the prop "order"'),
    order: stringOrNumberProp,
    offset: stringOrNumberProp,
  })
])
```

### Breakpoint
```js
const button = css`
  ${breakpoint('mobile')} {
    background-color: #56c220;
  }
  
  ${breakpoint('tablet')} {
    background-color: #ccc;
  }
  
  ${breakpoint('desktop')} {
    background-color: #000;
  }
`
```

### Palette
```js
  color: ${palette('main.background')};
```
