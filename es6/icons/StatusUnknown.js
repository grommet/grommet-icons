var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var StatusUnknown = function StatusUnknown(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'StatusUnknown' }, props),
    React.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd', strokeWidth: '2' },
      React.createElement('rect', { width: '20', height: '20', x: '2', y: '2', fill: '#000', stroke: '#000', rx: '2' }),
      React.createElement('path', { stroke: '#FFF', d: 'M12,15 L12,14 C12,13 12,12.5 13,12 C14,11.5 15,11 15,9.5 C15,8.5 14,7 12,7 C10,7 9,8.26413718 9,10 M12,16 L12,18' })
    )
  );
};

export default StatusUnknown;