var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Device = function Device(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Device' }, props),
    React.createElement('path', { fillRule: 'evenodd', d: 'M17.4191981,5.86998785 L22.2891859,1 L17.0692588,1 L12.0145808,6.05467801 L6.95018226,1 L1.73025516,1 L6.60024301,5.86998785 L0,5.86998785 L0,23.6488457 L3.47023086,23.6488457 L7.23207776,23.6488457 L8.68043742,23.6488457 L11.9951397,20.3341434 L15.309842,23.6488457 L17.2345079,23.6488457 L20.5297691,23.6488457 L24,23.6488457 L24,5.86998785 L17.4191981,5.86998785 L17.4191981,5.86998785 Z M12.0048603,15.1044957 L7.16403402,19.9550425 L3.69380316,19.9550425 L3.69380316,9.56379101 L20.3256379,9.56379101 L20.3256379,19.9550425 L16.855407,19.9550425 L12.0048603,15.1044957 L12.0048603,15.1044957 Z' })
  );
};

export default Device;