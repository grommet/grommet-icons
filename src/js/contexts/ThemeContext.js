import React from 'react';
import { base } from '../themes';

import { deepMerge } from '../utils';

export const ThemeContext = React.createContext(base);

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
