import React from 'react';

import { Icon } from '../Icon';

export const Grid = props => (
  <Icon viewBox='0 0 24 24' a11yTitle='Grid' {...props}>
    <path fill='none' stroke='#000' strokeWidth='2' d='M8,1 L8,23 M16,1 L16,23 M1,8 L23,8 M1,16 L23,16 M1,1 L23,1 L23,23 L1,23 L1,1 Z' />
  </Icon>
);
