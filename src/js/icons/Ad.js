import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Ad = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Ad" {...props}>
    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 10h4v4h-4v-4zm4 8h-4a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4m-4 8h-4a8 8 0 0 1-8-8v-4a8 8 0 0 1 8-8h4a8 8 0 0 1 8 8v4" />
  </StyledIcon>
));

Ad.displayName = 'Ad';

export { Ad };
