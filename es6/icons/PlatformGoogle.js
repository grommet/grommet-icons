var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var PlatformGoogle = function PlatformGoogle(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'PlatformGoogle' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        null,
        React.createElement(
          'g',
          null,
          React.createElement('path', { d: 'M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z', fill: '#4A90E2' }),
          React.createElement(
            'mask',
            { fill: 'white' },
            React.createElement('use', { xlinkHref: '#path-1' })
          ),
          React.createElement('use', { fill: '#EA4335', xlinkHref: '#path-1' }),
          React.createElement('path', { d: 'M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879', fill: '#FBBC05' }),
          React.createElement(
            'mask',
            { fill: 'white' },
            React.createElement('use', { xlinkHref: '#path-3' })
          ),
          React.createElement('use', { fill: '#34A853', xlinkHref: '#path-3' })
        )
      )
    )
  );
};

export default PlatformGoogle;