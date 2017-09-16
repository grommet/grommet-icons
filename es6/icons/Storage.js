var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Storage = function Storage(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Storage' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M3,24 L3,1 L21,1 L21,24 M9,6 L15,6 M9,16 L15,16 M3,11 L21,11 M3,21 L21,21' })
  );
};

export default Storage;