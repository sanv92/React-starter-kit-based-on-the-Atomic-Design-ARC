let warned = {} // eslint-disable-line prefer-const

/**
 * @param message
 */
function warnOnce(message) {
  if (!warned[message]) {
    /* istanbul ignore else */
    if (typeof console !== 'undefined') {
      console.error(message) // eslint-disable-line no-console
    }
    warned[message] = true
  }
}

/**
 * Make propTypes property deprecated (Bootstrap realization)
 *
 * @param propType
 * @param explanation
 * @returns {validate}
 *
 * example: block:
 *  - toggleable: deprecated(PropTypes.bool, 'Please use the props "body"'),
 *  - toggleable: deprecated(
 *      PropTypes.oneOfType([PropTypes.bool, PropTypes.string]), 'Please use the prop "expand"'
 *  ),
 */
export function deprecated(propType, explanation) {
  return function validate(props, propName, componentName, ...rest) {
    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
      warnOnce(`"${propName}" property of "${componentName}" has been deprecated.\n${explanation}`)
    }

    return propType(props, propName, componentName, ...rest)
  }
}
