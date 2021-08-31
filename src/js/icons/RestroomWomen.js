import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const RestroomWomen = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="RestroomWomen" {...props}>
    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 13.5 11 8l1 13m5-7.5L13 8l-1 13m0-16a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-1 3h2l1.5 8.5h-5L11 8z" />
  </StyledIcon>
));

RestroomWomen.displayName = 'RestroomWomen';

export { RestroomWomen };
