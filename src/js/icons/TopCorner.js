import React from 'react';

import { Icon } from '../Icon';

export const TopCorner = props => (
  <Icon viewBox='0 0 24 24' a11yTitle='TopCorner' {...props}>
    <polyline fill='none' stroke='#000' strokeWidth='2' points='4 16 16 16 16 4' transform='rotate(180 10 10)' />
  </Icon>
);
