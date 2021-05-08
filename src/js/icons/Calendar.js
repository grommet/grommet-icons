import React from 'react';

import { StyledIcon } from '../StyledIcon';

export const Calendar = props => (
  <StyledIcon viewBox='0 0 24 24' a11yTitle='Calendar' {...props}>
    <path fill='none' stroke='#000' strokeWidth='2' d='M2 5h20v17H2V5zm16 0V1M6 5V1m-4 9h20' />
  </StyledIcon>
);
