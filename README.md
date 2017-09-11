[![Slack](http://alansouzati.github.io/artic/img/slack-badge.svg)](http://slackin.grommet.io)  [![Build Status](https://travis-ci.org/grommet/grommet-icons.svg?branch=master)](https://travis-ci.org/grommet/grommet-icons) [![Test Coverage](https://codeclimate.com/github/grommet/grommet-icons/badges/coverage.svg)](https://codeclimate.com/github/grommet/grommet-icons/coverage)  [![Dependency Status](https://david-dm.org/grommet/grommet-icons.svg)](https://david-dm.org/grommet/grommet-icons) [![devDependency Status](https://david-dm.org/grommet/grommet-icons/dev-status.svg)](https://david-dm.org/grommet/grommet-icons#info=devDependencies)

# grommet-icons

iconography for grommet apps.

## Install

`npm install grommet-icons`

or 

`yarn add grommet-icons`

## Usage

```javascript
import { Facebook } from 'grommet-icons';

<Facebook />
<Facebook color='plain' />
<Facebook size='large' />
<Facebook size='xlarge' />
```

For now, to see all the icons available check this [page](https://github.com/grommet/grommet-icons/wiki/Icons)

## Try

Check this [codesandbox](https://codesandbox.io/s/xvr25oxo4o)

## Customize

The theme for the icon supports different colors and sizes. The default object is:

```
  icon: {
    color: '#666666',
    size: {
      large: '48px',
      xlarge: '96px',
    },
  },
```

You can customize by sending a `theme` prop or a `theme` context.

For example:

```javascript
  const theme = {
    icon: {
      color: '#333333'
    },
  };
  <ZoomOut theme={theme} />
```

or 

```javascript
  const theme = {
    icon: {
      color: '#333333'
    },
  };
  <ThemeProvider theme={theme}>
    <ZoomOut />
  </ThemeProvider>
```

If you need a more advanced customization you can use extend entry:

```javascript
  const advancedTheme = {
    icon: {
      extend: css`
        ${props => props.color === 'sunny' && `
          fill: yellow;
          stroke: yellow;
        ` }
      `
    },
  };
  <ThemeProvider theme={theme}>
    <ZoomOut color='sunny' />
  </ThemeProvider>
```
## Build 

To build this library, execute the following commands:

  1. Install NPM modules

    $ npm install (or yarn install)

  2. Run pack

    $ npm run dist

  3. Test and run linters:

    $ npm run check

  4. Generate React icons:

    $ npm run generate-icons
