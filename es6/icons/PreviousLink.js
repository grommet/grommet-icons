var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var PreviousLink = function PreviousLink(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'PreviousLink' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M2,12 L22,12 M13,3 L22,12 L13,21', transform: 'translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) ' })
      )
    )
  );
};

export default PreviousLink;