var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Video = function Video(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Video' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M15,9 L23,5 L23,19 L15,15 L15,9 Z M1,5 L15,5 L15,19 L1,19 L1,5 Z' })
      )
    )
  );
};

export default Video;