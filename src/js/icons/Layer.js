import React from 'react';

import Icon from '../Icon';

const Layer = props => (
  <Icon a11yTitle='Layer' {...props}>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'><g stroke='#000000' strokeWidth='2'><path d='M1,1 L17,1 L17,17 L1,17 L1,1 Z M20,7 L23,7 L23,23 L7,23 L7,20 L7,20' /></g></g>
  </Icon>
);

export default Layer;
