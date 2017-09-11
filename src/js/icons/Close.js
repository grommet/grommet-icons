import React from 'react';

import Icon from '../Icon';

const Close = props => (
  <Icon a11yTitle='Close' {...props}>
    <path fill='none' stroke='#000' strokeWidth='2' d='M3,3 L21,21 M3,21 L21,3' />
  </Icon>
);

export default Close;
