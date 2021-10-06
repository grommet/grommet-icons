import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Compare = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Compare" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M11 7H1v10h6V8m4-3v4l2-2-2-2zm0 12 2 2v-4l-2 2zm2 0h10V7h-6v9" />
  </StyledIcon>
));

Compare.displayName = 'Compare';

export { Compare };
