import color from 'color'


export const themeGenerate = (theme) => {
  const { palette, packs } = theme
  const { neutrals } = packs

  const findArray = (props) => {
    console.log('test')
    return findArray()
  }

  findArray(packs.primary)

  // const result = Object.entries(packs).map(([key, value]) => {
  //   console.log('key: ', key)
  //   console.log('value: ', value)
  //   return 0
  // })

  // // filter options
  // const mainPack = ['default', 'primary', 'secondary', 'success', 'warning', 'danger']
  // const neutralPack = ['neutrals']
  //
  // // get colors (color, weight)
  // const getColor = ([c, w]) => palette[c][w]
  // const getForegroundColor = ([c, w]) => ({
  //   background: palette[c][w],
  //   foreground: palette[c][100],
  //   contrastBackgroundText: color(palette[c][w]).isLight() ? '#000' : '#fff',
  //   contrastForegroundText: color(palette[c][100]).isLight() ? '#000' : '#fff',
  // })
  //
  // // filtering
  // const mainColors = Object.entries(packs).filter(([key]) => (
  //   mainPack.includes(key)
  // ))
  // const neutralColors = Object.entries(packs).filter(([key]) => (
  //   neutralPack.includes(key)
  // ))
  //
  // const main = mainColors.map(([key, value]) => ({
  //   [key]: {
  //     initial: getForegroundColor(value.initial),
  //     hover: getForegroundColor(value.hover),
  //     active: getForegroundColor(value.active),
  //     disabled: getForegroundColor(value.disabled),
  //   },
  // }))
  //
  // console.log('main: ', main)

  return theme
}

// export const themeGenerate = (theme) => {
//   const { palette, packs } = theme
//   const { neutrals } = packs
//
//   // filter options
//   const mainPack = ['default', 'primary', 'secondary', 'success', 'warning', 'danger']
//   const neutralPack = ['neutrals']
//
//   // get colors (color, weight)
//   const getColor = ([c, w]) => palette[c][w]
//   const getForegroundColor = ([c, w]) => ({
//     background: palette[c][w],
//     foreground: palette[c][100],
//     contrastBackgroundText: color(palette[c][w]).isLight() ? '#000' : '#fff',
//     contrastForegroundText: color(palette[c][100]).isLight() ? '#000' : '#fff',
//   })
//
//   // filtering
//   const mainColors = Object.entries(packs).filter(([key]) => (
//     mainPack.includes(key)
//   ))
//   const neutralColors = Object.entries(packs).filter(([key]) => (
//     neutralPack.includes(key)
//   ))
//
//   const main = mainColors.map(([key, value]) => ({
//     [key]: {
//       initial: getForegroundColor(value.initial),
//       hover: getForegroundColor(value.hover),
//       active: getForegroundColor(value.active),
//       disabled: getForegroundColor(value.disabled),
//     },
//   }))
//
//   console.log('main: ', main)
//
//   return {theme, packs: {...main, neutrals: 0}}
// }


// export const themeGenerate = (theme) => {
//   const { palette, packs } = theme
//   const { neutrals } = packs
//
//   // const getColor = (key) => ([color, weight]) => ({
//   //   [key]: palette[color][weight],
//   // })
//
//   const getColor = ([color, weight]) => ({
//     background: palette[color][weight],
//     foreground: palette[color][weight],
//     contrastText: palette[color][weight],
//   })
//
//   const test = Object.entries(packs).map(([key, value]) => {
//     if (key === 'neutrals') return false
//
//     // console.log('key: ', key)
//     // console.log('value: ', value)
//
//     console.log('key: ', key)
//     console.log('value.initial: ', value.initial)
//     console.log('getColor(key)(value.initial): ', getColor(value.initial))
//
//     return ({
//       [key]: {
//         initial: getColor(value.initial),
//         hover: getColor(value.hover),
//         active: getColor(value.active),
//         disabled: getColor(value.disabled),
//       },
//     })
//   })
//
//   console.log('test: ', test)
//
//   // console.log('packs: ', packs)
//   // console.log('neutrals: ', neutrals)
//
//   return {theme, packs: {...packs, neutrals: 0}}
// }
