import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FolderCycle = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FolderCycle" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M7 18a5 5 0 0 1 5-5c1.985 0 3.7 1.156 4.5 3m.5 2a5 5 0 0 1-5 5c-1.985 0-3.699-1.156-4.5-3m5.5-4h4v-4m-6 8H7v4m-3-1H1V1h8l3 4h11v18h-4M1 9h22M4 23H1V1h8l3 4h11v18h-4M1 9h22" />
  </StyledIcon>
));

FolderCycle.displayName = 'FolderCycle';

export { FolderCycle };
