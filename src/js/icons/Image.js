import React from 'react';

import { StyledIcon } from '../StyledIcon';

export const Image = props => (
  <StyledIcon viewBox='undefined' a11yTitle='Image' {...props}>
    <path fill='none' stroke='#000' strokeWidth='2' d='M1 3h22v18H1V3zm5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm17 6-5-6-6 7-3-3-8 8' />
  </StyledIcon>
);
