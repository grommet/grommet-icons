import React from 'react';

import { Icon } from '../Icon';

export const Note = props => (
  <Icon viewBox='0 0 24 24' a11yTitle='Note' {...props}>
    <path fill='none' stroke='#000' strokeWidth='2' d='M1,23 L16,23 L23,16 L23,1 L1,1 L1,23 Z M15,23 L15,15 L23,15' />
  </Icon>
);
