import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

export const HomeOption = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox='0 0 24 24' a11yTitle='HomeOption' {...props}>
    <rect x='3' y='3' width='18' height='18' rx='4' stroke='#000' strokeWidth='2' />
  </StyledIcon>
  ));
