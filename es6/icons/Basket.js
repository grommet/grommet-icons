var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Basket = function Basket(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Basket' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M2,12 L22,12 L20,23 L4,23 L2,12 Z M20,8 L14,1 M4,8 L10,1 M1,8 L23,8 L23,12 L1,12 L1,8 Z M8,15 L8,20 M16,15 L16,20 M12,15 L12,20' })
      )
    )
  );
};

export default Basket;