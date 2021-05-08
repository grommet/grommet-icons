import React from 'react';

import { StyledIcon } from '../StyledIcon';

export const Checkmark = props => (
  <StyledIcon viewBox='0 0 24 24' a11yTitle='Checkmark' {...props}>
    <path fill='none' stroke='#000' strokeWidth='2' d='m2 14 7 6L22 4' />
  </StyledIcon>
);
