import get from 'lodash/get'


/* eslint-disable no-magic-numbers */
export const palettePack = {
  getAll: (packColor) => (props) => {
    const colorPack = props.theme.packs[packColor] || props.theme.packs[props.color]

    const { palette } = props.theme

    /* eslint-disable no-param-reassign */
    return Object.entries(colorPack).map(([key, value]) => {
      const [bgColor, bgShade] = value.background
      const [fgColor, fgShade] = value.foreground

      return {
        [key]: {
          background: palette[bgColor][bgShade || 500],
          foreground: palette[fgColor][fgShade || 500],
        },
      }
    }).reduce((obj, item) => ({ ...obj, ...item }), {})
  },
  getAllText: (packColor, textShade) => (props) => {
    const colorPack = props.theme.packs[packColor] || props.theme.packs[props.color]

    const { palette, paletteText } = props.theme

    return Object.entries(colorPack).map(([key, value]) => {
      const [bgColor, bgShade] = value.background
      const [fgColor, fgShade] = value.foreground

      return {
        [key]: {
          background: palette[paletteText[bgColor][bgShade || 500]][textShade || 'primary'],
          foreground: palette[paletteText[fgColor][fgShade || 500]][textShade || 'primary'],
        },
      }
    })
  },
  getColor: (path) => (props) => {
    const key = path.split('.')[0]
    const colorPack = props.theme.packs[key]
      ? {
        [key]: props.theme.packs[key],
      } : {
        [props.color]: props.theme.packs[props.color],
      }

    const newPath = props.theme.packs[key]
      ? path
      : `${props.color}.${path}`

    const { palette } = props.theme
    const [color, shade] = get(colorPack, newPath)

    return palette[color][shade || 500]
  },
  getColorText: (path, textShade) => (props) => {
    const key = path.split('.')[0]
    const colorPack = props.theme.packs[key]
      ? {
        [key]: props.theme.packs[key],
      }
      : {
        [props.color]: props.theme.packs[props.color],
      }

    const newPath = props.theme.packs[key]
      ? path
      : `${props.color}.${path}`

    const { palette, paletteText } = props.theme
    const [color, shade] = get(colorPack, newPath)

    return palette[paletteText[color][shade || 500]][textShade || 'primary']
  },
}
