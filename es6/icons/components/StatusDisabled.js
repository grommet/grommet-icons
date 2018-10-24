var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var StatusDisabled = function StatusDisabled(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'StatusDisabled' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M2,3.99079514 C2,2.89130934 2.89821238,2 3.99079514,2 L20.0092049,2 C21.1086907,2 22,2.89821238 22,3.99079514 L22,20.0092049 C22,21.1086907 21.1017876,22 20.0092049,22 L3.99079514,22 C2.89130934,22 2,21.1017876 2,20.0092049 L2,3.99079514 Z M18,12 L6,12' })
  );
};