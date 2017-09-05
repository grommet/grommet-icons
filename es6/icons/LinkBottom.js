var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var LinkBottom = function LinkBottom(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'LinkBottom' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M12,5 L12,23 M4,13 L12,5 L20,13 M2,2 L22,2', transform: 'translate(12.000000, 12.000000) scale(1, -1) translate(-12.000000, -12.000000) ' })
      )
    )
  );
};

export default LinkBottom;