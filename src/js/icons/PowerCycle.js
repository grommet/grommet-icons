import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const PowerCycle = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="PowerCycle" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M20 8a8.955 8.955 0 0 0-8.036-5C7.014 3 3 7.03 3 12m1 4a8.955 8.955 0 0 0 8.036 5C16.986 21 21 16.97 21 12M9 16H3v6M21 2v6h-6" />
  </StyledIcon>
));

PowerCycle.displayName = 'PowerCycle';

export { PowerCycle };
