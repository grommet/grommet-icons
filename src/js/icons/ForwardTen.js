import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const ForwardTen = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="ForwardTen" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M20.889 7.556C19.33 4.267 15.93 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10m0-8v4h-4m-9 8V9l-2 .533M17 12c0-2-1-3.5-2.5-3.5S12 10 12 12s1 3.5 2.5 3.5S17 14 17 12zm-2.5-3.5C16.925 8.5 17 11 17 12s0 3.5-2.5 3.5S12 13 12 12s.059-3.5 2.5-3.5z" />
  </StyledIcon>
));

ForwardTen.displayName = 'ForwardTen';

export { ForwardTen };
