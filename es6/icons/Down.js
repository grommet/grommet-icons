var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Down = function Down(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Down' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { strokeWidth: '2', stroke: '#000000' },
        React.createElement('polyline', { transform: 'translate(12.085739, 13.173763) scale(-1, 1) rotate(91.000000) translate(-12.085739, -13.173763) ', points: '7.08573898 3.17376254 17.085739 13.1737625 7.08573898 23.1737625' })
      )
    )
  );
};

export default Down;