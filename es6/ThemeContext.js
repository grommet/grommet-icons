import React from 'react';
import defaultTheme from './defaultTheme';

import { deepMerge } from './utils';

var ThemeContext = React.createContext(defaultTheme);

ThemeContext.Extend = function (_ref) {
  var children = _ref.children,
      value = _ref.value;
  return React.createElement(
    ThemeContext.Consumer,
    null,
    function (theme) {
      return React.createElement(
        ThemeContext.Provider,
        {
          value: deepMerge(theme, value)
        },
        children
      );
    }
  );
};

export default ThemeContext;