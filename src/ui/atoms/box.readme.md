# Responsive React grid system built with styled-components

## Breakpoints
The Grid component uses a mobile-first responsive approach, where any value set works from that breakpoint and wider. Breakpoints are hard-coded to the following min-widths: 40em, 52em, 64em.
To customize, provide an array of string values that will be converted to media queries.

## Spacing Scale
Grid Styled components' margin and padding props use a 4 step spacing scale to help keep things aligned and keep layouts consistent.
The default scale is based on an 8px/powers-of-two grid: [ 0, 4, 8, 16, 32, 64, 128, 256, 512 ], which helps keep spacing consistent and elements aligned even when nesting components.
