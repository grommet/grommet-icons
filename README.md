[![Slack](http://alansouzati.github.io/artic/img/slack-badge.svg)](http://slackin.grommet.io)  [![Build Status](https://travis-ci.org/grommet/grommet-icons.svg?branch=master)](https://travis-ci.org/grommet/grommet-icons) [![Test Coverage](https://codeclimate.com/github/grommet/grommet-icons/badges/coverage.svg)](https://codeclimate.com/github/grommet/grommet-icons/coverage)  [![Dependency Status](https://david-dm.org/grommet/grommet-icons.svg)](https://david-dm.org/grommet/grommet-icons) [![PRs Welcome](https://img.shields.io/badge/pr's-welcome-7d4cdb.svg)][contributing]

# grommet-icons

Iconography for Grommet and React.js

## Install

`npm install grommet-icons grommet-styles --save`

or

`yarn add grommet-icons grommet-styles`

## Usage

```javascript
import { Facebook } from 'grommet-icons';

<Facebook />
<Facebook color='plain' />
<Facebook size='large' />
<Facebook size='xlarge' />
```

Visit our [site](https://icons.grommet.io/) for more icons.

## Create Your Own Grommet Icon
Any 24x24px SVG may be converted to an icon using the `<Blank>` icon. For example:

```javascript
import React from 'react';
import { Blank } from 'grommet-icons';

export const MyIcon = props => (
  <Blank {...props}>
    {/* your 24x24 svg goes here - e.g. here's a 24x24px circle */}
    <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="5" />
    </svg>
  </Blank>
);
```

## Try

Check out this [codesandbox](https://codesandbox.io/s/xvr25oxo4o)

## Customize

The theme for the icon supports different colors and sizes. The default definition is:

```
theme = {
  global: {
    colors: {
      icon: '#666666',
    }
  },
  icon: {
    size: {
      small: '12px',
      medium: '24px',
      large: '48px',
      xlarge: '96px',
    },
    extend: undefined,
  },
}
```

You can customize sizing and/or colors by specifying your own theme.
The `colors` property allows you to use color names. For
instance: `colors: { brand: '#ff0000' }` would allow you to use
`<ZoomOut color='brand' />`.

```javascript
  import { ThemeProvider } from 'styled-components';
  import { base, deepMerge } from 'grommet-icons';
  const theme = deepMerge(base, {
    global: {
      colors: {
        brand: '#ff0000',
      },
    },
  });
  return (
    <ThemeContext.Provider theme={theme}>
      <ZoomOut color='brand' />
    </ThemeContext.Provider>
  );
```

## Build

To build this library, execute the following commands:

  1. Install NPM modules

    $ npm install (or yarn install)

  2. Run pack

    $ npm run build

  3. Test and run linters:

    $ npm run lint

  4. Generate React icons:

    $ npm run generate-icons

[contributing]: CONTRIBUTING.md
