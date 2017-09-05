var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var BrandHpeElementOutline = function BrandHpeElementOutline(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'BrandHpeElementOutline' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { fill: '#01A982' },
        React.createElement('path', { d: 'M0,12 L40,12 L40,0 L0,0 L0,12 Z M3,3 L37,3 L37,9 L3,9 L3,3 Z' })
      )
    )
  );
};

export default BrandHpeElementOutline;