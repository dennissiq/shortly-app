# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Cyan: hsl(180, 66%, 49%)
- Dark Violet: hsl(257, 27%, 26%)

### Secondary

- Red: hsl(0, 87%, 67%)

### Neutral

- Gray: hsl(0, 0%, 75%)
- Grayish Violet: hsl(257, 7%, 63%)
- Very Dark Blue: hsl(255, 11%, 22%)
- Very Dark Violet: hsl(260, 8%, 14%)

## Typography

### Body Copy

- Font size: 18px

### Fonts

- Family: [Poppins](https://fonts.google.com/specimen/Poppins)
- Weights: 500, 700

## Icons

For the social icons, you can either use the SVGs provided or a font icon library. Some suggestions for font icon libraries can be found below:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)

## CSS-in-JS

Style your project using [styled-components](https://styled-components.com/)

### Motivation

`styled-components` is the result of wondering how we could enhance CSS for styling React component systems. By focusing on a single use case we managed to optimize the experience for developers as well as the output for end users.

Apart from the improved experience for developers, styled-components provides:

- Automatic critical CSS: styled-components keeps track of which components are rendered on a page and injects their styles and nothing else, fully automatically. Combined with code splitting, this means your users load the least amount of code necessary.

- No class name bugs: styled-components generates unique class names for your styles. You never have to worry about duplication, overlap or misspellings.

- Easier deletion of CSS: it can be hard to know whether a class name is used somewhere in your codebase. styled-components makes it obvious, as every bit of styling is tied to a specific component. If the component is unused (which tooling can detect) and gets deleted, all its styles get deleted with it.

- Simple dynamic styling: adapting the styling of a component based on its props or a global theme is simple and intuitive without having to manually manage dozens of classes.

- Painless maintenance: you never have to hunt across different files to find the styling affecting your component, so maintenance is a piece of cake no matter how big your codebase is.

- Automatic vendor prefixing: write your CSS to the current standard and let styled-components handle the rest.
  You get all of these benefits while still writing the CSS you know and love, just bound to individual components.
