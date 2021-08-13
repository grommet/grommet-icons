import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

export const LinkNext = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox='0 0 24 24' a11yTitle='LinkNext' {...props}>
    <path fill='none' stroke='#000' strokeWidth='2' d='M2 12h20m-9-9 9 9-9 9' />
  </StyledIcon>
  ));
