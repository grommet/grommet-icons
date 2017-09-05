var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var FormFilter = function FormFilter(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'FormFilter' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { strokeWidth: '2', stroke: '#000000' },
        React.createElement('polygon', { points: '6 8 11.6666667 12.6666667 11.6666667 18 12.3333333 18 12.3333333 12.6666667 18 8 18 6 6 6' })
      )
    )
  );
};

export default FormFilter;