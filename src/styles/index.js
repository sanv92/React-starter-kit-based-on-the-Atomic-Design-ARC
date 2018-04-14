import { css } from 'styled-components'
import { normalize } from 'styled-normalize'
import { theme } from 'themes'


export const globalStyles = css`
  ${normalize};
`


// export const globalStyles = css`
//   ${normalize}
//
//   * {
//     box-sizing: border-box;
//   }
//
//   html, body {
//     font-size: ${theme.typography.main.fontSize}px;
//     line-height: ${theme.typography.main.lineHeight};
//     font-family: ${theme.typography.fontFamily.body};
//
//     // Required only for custom fonts
//     ${theme.typography.fontWeights.body && css`
//       font-weight: ${theme.typography.fontWeights.body};
//     `};
//
//     font-style: normal;
//     margin: 0;
//     padding: 0;
//     background-color: ${theme.palette.background.body};
//   }
//
//   a {
//     color: ${theme.palette.primary.main.background};
//   }
//
//   a:hover {
//      color: ${theme.palette.primary.hover.background};
//   }
//
//   p {
//     font-size: ${theme.typography.p.fontSize};
//     margin-bottom: ${theme.typography.p.marginBottom};
//     padding-top: ${theme.typography.p.paddingTop};
//   }
//
//   small {
//     font-size: ${theme.typography.small.fontSize};
//     margin-bottom: ${theme.typography.small.marginBottom};
//     padding-top: ${theme.typography.small.paddingTop};
//   }
// `
