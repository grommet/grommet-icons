var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Notes = function Notes(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Notes' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M3,1 L3,23 L16,23 L21,18 L21,1 L3,1 Z M6,17 L11,17 M6,13 L18,13 M6,9 L16,9 M3,5 L21,5 M21,17 L15,17 L15,23' })
      )
    )
  );
};

export default Notes;