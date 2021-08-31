import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Sync = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Sync" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M5 19h11a7 7 0 0 0 7-7V9M8 15l-4 4 4 4M19 5H8a7 7 0 0 0-7 7v3M16 1l4 4-4 4" />
  </StyledIcon>
));

Sync.displayName = 'Sync';

export { Sync };
