var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var StatusOutlineWarning = function StatusOutlineWarning(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'StatusOutlineWarning' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', strokeLinejoin: 'round' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M12,3 L22,21 L2,21 L12,3 Z M12,9 L12,15 M12,16 L12,18' })
      )
    )
  );
};

export default StatusOutlineWarning;