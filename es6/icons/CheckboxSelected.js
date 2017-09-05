var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var CheckboxSelected = function CheckboxSelected(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'CheckboxSelected' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M2,2 L22,2 L22,22 L2,22 L2,2 Z M5,13 L10,17 L19,6' })
      )
    )
  );
};

export default CheckboxSelected;