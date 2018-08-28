import React from 'react';
import { base } from '../themes';

import { deepMerge } from '../utils';

export var ThemeContext = React.createContext(base);

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