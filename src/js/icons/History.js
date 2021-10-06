import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const History = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="History" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1C7.563 1 4 4 2 7.5M1 1v7h7m8 9-4-4V6" />
  </StyledIcon>
));

History.displayName = 'History';

export { History };
