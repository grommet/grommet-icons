import React from 'react';

import { StyledIcon } from '../StyledIcon';

export const Checkmark = props => (
  <StyledIcon viewBox='0 0 24 24' a11yTitle='Checkmark' {...props}>
    <polyline fill='none' stroke='#000' strokeWidth='2' points='2 14 9 20 22 4' />
  </StyledIcon>
);
