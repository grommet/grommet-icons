var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var BrandHpeLabsInsignia = function BrandHpeLabsInsignia(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'BrandHpeLabsInsignia' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { strokeWidth: '4', stroke: '#01A982' },
        React.createElement('polyline', { points: '20 46 2 46 2 2 26 2 26 30 18 30 18 10 10 10 10 38 34 38' })
      )
    )
  );
};

export default BrandHpeLabsInsignia;