var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Home = function Home(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Home' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M1,11 L12,2 L23,11 M15,23 L15,15 L15,15 L9,15 L9,23 M4,23 L4,9 M20,23 L20,9' })
      )
    )
  );
};

export default Home;