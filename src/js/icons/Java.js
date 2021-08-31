import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Java = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Java" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 18V9h16v9c0 4-2 5-8 5s-8-1-8-5zm16-9v3a3 3 0 1 0 3-3h-3zm-4-3V2M5 6V4m4 2V0" />
  </StyledIcon>
));

Java.displayName = 'Java';

export { Java };
