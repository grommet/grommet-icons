import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Technology = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Technology" {...props}>
    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.5 19a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM10 5l2-2m-4.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm.5 6 8-8M5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm13-13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM12 21l2-2" />
  </StyledIcon>
));

Technology.displayName = 'Technology';

export { Technology };
