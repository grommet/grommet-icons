var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Up = function Up(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Up' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { strokeWidth: '2', stroke: '#000000' },
        React.createElement('polyline', { transform: 'translate(12.085739, 11.173763) scale(-1, -1) rotate(91.000000) translate(-12.085739, -11.173763) ', points: '7.08573898 1.17376254 17.085739 11.1737625 7.08573898 21.1737625' })
      )
    )
  );
};

export default Up;