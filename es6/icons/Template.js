var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Template = function Template(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Template' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M1,3 L23,3 L23,21 L1,21 L1,3 Z M1,8 L23,8 M7,8 L7,21' })
      )
    )
  );
};

export default Template;