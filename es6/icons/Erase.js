var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Erase = function Erase(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Erase' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M7,21 L22,6 L18,2 L2,18 L5,21 L19,21 M6,14 L10,18' })
      )
    )
  );
};

export default Erase;