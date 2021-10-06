import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Expand = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Expand" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m10 14-8 8m-1-7v8h8M22 2l-8 8m1-9h8v8" />
  </StyledIcon>
));

Expand.displayName = 'Expand';

export { Expand };
