/* eslint-disable no-magic-numbers */
import { rem as polishedRem, em } from 'polished'
import { colors } from './colors'


const baseFontSize = 16
const rem = (num) => polishedRem(num, baseFontSize)


/* eslint-disable max-len */
export const defaultTheme = {
  containerMaxWidth: em(1280),
  spacing: [em(6), em(12), em(18)],
  typography: {
    fontFamily: {
      heading: {
        normal: 'Arial, Helvetica, Tahoma, sans-serif',
        bold: 'Arial, Helvetica, Tahoma, sans-serif',
        italic: 'Arial, Helvetica, Tahoma, sans-serif',
      },
      body: {
        normal: 'Arial, Helvetica, Tahoma, sans-serif',
        bold: 'Arial, Helvetica, Tahoma, sans-serif',
        italic: 'Arial, Helvetica, Tahoma, sans-serif',
      },
    },
    fontWeights: {
      heading: {
        normal: 400,
        bold: 700,
        italic: 400,
      },
      body: {
        normal: 400,
        bold: 700,
        italic: 400,
      },
    },
    main: {
      fontSize: baseFontSize,
      lineHeight: 1.5,
    },
    h1: {
      fontSize: rem(28),
      lineHeight: 1.2,
      marginBottom: rem(32),
      paddingTop: 0,
    },
    h2: {
      fontSize: rem(24),
      lineHeight: 1.25,
      marginBottom: rem(12),
      paddingTop: rem(6),
    },
    h3: {
      fontSize: rem(21),
      lineHeight: 1.25,
      marginBottom: rem(6),
      paddingTop: rem(12),
    },
    h4: {
      fontSize: rem(18),
      lineHeight: 1.33333,
      marginBottom: rem(8),
      paddingTop: rem(12),
    },
    h5: {
      fontSize: rem(16),
      lineHeight: 1.5,
      marginBottom: rem(9),
      paddingTop: rem(12),
    },
    h6: {
      fontSize: rem(14),
      lineHeight: 1.5,
      marginBottom: rem(3),
      paddingTop: rem(9),
    },
    p: {
      fontSize: rem(baseFontSize),
      marginBottom: rem(12),
      paddingTop: 0,
    },
    small: {
      fontSize: rem(10),
      marginBottom: 0,
      paddingTop: 0,
    },
  },
  palette: {
    black: colors.palette.black,
    white: colors.palette.white,

    primary: colors.palette.blue,
    secondary: colors.palette.pink,
    success: colors.palette.green,
    warning: colors.palette.yellow,
    danger: colors.palette.red,

    grey: colors.palette.grey,
  },
  paletteText: {
    black: colors.paletteText.black,
    white: colors.paletteText.white,

    primary: colors.paletteText.blue,
    secondary: colors.paletteText.pink,
    success: colors.paletteText.green,
    warning: colors.paletteText.yellow,
    danger: colors.paletteText.red,

    grey: colors.paletteText.grey,
  },
  packs: {
    default: {
      initial: {
        background: ['grey', 600],
        foreground: ['grey', 50],
      },
      hover: {
        background: ['grey', 500],
        foreground: ['grey', 50],
      },
      active: {
        background: ['grey', 800],
        foreground: ['grey', 300],
      },
      disabled: {
        background: ['grey', 800],
        foreground: ['grey', 200],
      },
    },
    primary: {
      initial: {
        background: ['primary', 500],
        foreground: ['primary', 50],
      },
      hover: {
        background: ['primary', 300],
        foreground: ['primary', 50],
      },
      active: {
        background: ['primary', 800],
        foreground: ['primary', 300],
      },
      disabled: {
        background: ['primary', 800],
        foreground: ['primary', 200],
      },
    },
    secondary: {
      initial: {
        background: ['secondary', 500],
        foreground: ['secondary', 50],
      },
      hover: {
        background: ['secondary', 300],
        foreground: ['secondary', 50],
      },
      active: {
        background: ['secondary', 800],
        foreground: ['secondary', 300],
      },
      disabled: {
        background: ['secondary', 800],
        foreground: ['secondary', 200],
      },
    },
    success: {
      initial: {
        background: ['success', 600],
        foreground: ['success', 50],
      },
      hover: {
        background: ['success', 300],
        foreground: ['success', 50],
      },
      active: {
        background: ['success', 800],
        foreground: ['success', 300],
      },
      disabled: {
        background: ['success', 800],
        foreground: ['success', 200],
      },
    },
    warning: {
      initial: {
        background: ['warning', 500],
        foreground: ['warning', 50],
      },
      hover: {
        background: ['warning', 300],
        foreground: ['warning', 50],
      },
      active: {
        background: ['warning', 800],
        foreground: ['warning', 300],
      },
      disabled: {
        background: ['warning', 800],
        foreground: ['warning', 200],
      },
    },
    danger: {
      initial: {
        background: ['danger', 500],
        foreground: ['danger', 50],
      },
      hover: {
        background: ['danger', 300],
        foreground: ['danger', 50],
      },
      active: {
        background: ['danger', 800],
        foreground: ['danger', 300],
      },
      disabled: {
        background: ['danger', 800],
        foreground: ['danger', 200],
      },
    },
    neutrals: {
      text: ['grey', 800],
      icon: ['grey', 800],
      tooltip: ['grey', 800],
      field: ['grey', 400],
      fieldBackground: ['white'],
      navigation: ['grey', 100],
      divider: ['grey', 800],
      background: ['white'],
      border: ['grey', 800],
      shadow: ['grey', 200],
    },
  },
  button: {
    borderRadius: rem(2),
    textTransform: 'none',
    fontWeight: 500,
    fontFamily: 'Arial, Helvetica, Tahoma, sans-serif',
  },
}
