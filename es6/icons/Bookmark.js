var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Bookmark = function Bookmark(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Bookmark' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { strokeWidth: '2', stroke: '#000000' },
        React.createElement('polygon', { points: '5 1 5 22 12 17 19 22 19 1' })
      )
    )
  );
};

export default Bookmark;