import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Analytics = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Analytics" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M20 7c1.25 1.67 2 3.75 2 6 0 5.52-4.48 10-10 10S2 18.52 2 13 6.48 3 12 3m0-2v12l9.6-7.2C19.41 2.89 15.92 1 12 1z" />
  </StyledIcon>
));

Analytics.displayName = 'Analytics';

export { Analytics };
