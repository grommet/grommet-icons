var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var FormCheckmark = function FormCheckmark(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'FormCheckmark' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { strokeWidth: '2', stroke: '#000000' },
        React.createElement('polyline', { points: '6 13.0000002 10.2000002 16.6000004 18.0000005 7' })
      )
    )
  );
};

export default FormCheckmark;