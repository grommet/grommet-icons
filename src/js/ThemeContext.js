import React from 'react';
import defaultTheme from './defaultTheme';

import { deepMerge } from './utils';

const ThemeContext = React.createContext(defaultTheme);

ThemeContext.Extend = ({ children, value }) => (
  <ThemeContext.Consumer>
    {theme => (
      <ThemeContext.Provider
        value={deepMerge(theme, value)}
      >
        {children}
      </ThemeContext.Provider>
    )}
  </ThemeContext.Consumer>
);

export default ThemeContext;
