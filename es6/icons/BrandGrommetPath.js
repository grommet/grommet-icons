var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var BrandGrommetPath = function BrandGrommetPath(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'BrandGrommetPath' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#865CD6', strokeWidth: '5' },
        React.createElement('path', { d: 'M24,42 C33.9411255,42 42,33.9411255 42,24 C42,14.0588745 33.9411255,6 24,6 C14.0588745,6 6,14.0588745 6,24 C6,33.9411255 14.0588745,42 24,42 Z' })
      )
    )
  );
};

export default BrandGrommetPath;