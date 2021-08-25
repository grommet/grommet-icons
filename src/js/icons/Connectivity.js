import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Connectivity = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Connectivity" {...props}>
    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 8v4l3 3 6-6-4-4H5L2.5 3M17 7l3 3v7m-7-6 3 3m-5-1 3 3m-7 1 3 3h10" />
  </StyledIcon>
));

Connectivity.displayName = 'Connectivity';

export { Connectivity };
