import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Train = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Train" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M5 1h14a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm4 1h6M3 5h18M4 23h16M3 12h18M7 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM12 5v7m-3 8-2 3m8-3 2 3" />
  </StyledIcon>
));

Train.displayName = 'Train';

export { Train };
