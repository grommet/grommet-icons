import React from 'react';

import Icon from '../Icon';

const Checkmark = props => (
  <Icon a11yTitle='Checkmark' {...props}>
    <polyline fill='none' stroke='#000' strokeWidth='2' points='2 14 9 20 22 4' />
  </Icon>
);

export default Checkmark;
