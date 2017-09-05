var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Save = function Save(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Save' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M3,2 L3,21 L21,21 L21,3 L12,3 L12,14 M8,11 L12,15 L16,11' })
      )
    )
  );
};

export default Save;