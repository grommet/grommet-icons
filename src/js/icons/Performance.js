import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Performance = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Performance" {...props}>
    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m12 19-2 3-3-1-.5-3.5L3 17l-1-3 3-2-3-2 1-3 3.5-.5L7 3l3-1 2 3 2-3 3 1 .5 3.5L21 7l1 3-3 2 3 2-1 3-3.5.5L17 21l-3 1-2-3zm0-3a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
  </StyledIcon>
));

Performance.displayName = 'Performance';

export { Performance };
