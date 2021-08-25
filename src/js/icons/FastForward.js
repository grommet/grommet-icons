import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FastForward = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FastForward" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M9 2.059V8L1 2.059v20L9 16v6.059l13-10z" />
  </StyledIcon>
));

FastForward.displayName = 'FastForward';

export { FastForward };
