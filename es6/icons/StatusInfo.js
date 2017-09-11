var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var StatusInfo = function StatusInfo(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'StatusInfo' }, props),
    React.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd', strokeWidth: '2' },
      React.createElement('rect', { width: '20', height: '20', x: '2', y: '2', fill: '#000', stroke: '#000', rx: '2' }),
      React.createElement('path', { stroke: '#FFF', d: 'M12,10 L12,18 M12,6 L12,8' })
    )
  );
};

export default StatusInfo;