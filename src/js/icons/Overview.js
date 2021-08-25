import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Overview = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Overview" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M18.5 21a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zM10 7h4M1.5 14.5S5.5 5 6 4s1.5-1 2-1 2 0 2 2v11m-4.5 5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm17-6.5S18.5 5 18 4s-1.5-1-2-1-2 0-2 2v11m-4 0h4" />
  </StyledIcon>
));

Overview.displayName = 'Overview';

export { Overview };
