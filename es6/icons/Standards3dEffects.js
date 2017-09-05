var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Standards3dEffects = function Standards3dEffects(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Standards3dEffects' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { fill: '#231F20' },
        React.createElement('polygon', { points: '13.009159 1 6.84429642 2.98834305 20.203164 7.31473772 20.203164 15.8376353 11.3005828 18.7152373 3.7868443 16.2872606 3.7868443 7.93422148 11.050791 10.2822648 17.2156536 8.29392173 3.83680266 3.95753539 0 5.20649459 0 19.0449625 11.3005828 22.7019151 24 18.5953372 24 4.54704413' })
      )
    )
  );
};

export default Standards3dEffects;