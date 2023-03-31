import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Moon = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Moon" {...props}>
    <path stroke="#000" fill="none" strokeLinejoin="round" strokeWidth="2" d="M9.874 5.008c2.728-1.68 6.604-1.014 8.25.197-2.955.84-5.11 3.267-5.242 6.415-.18 4.28 3.006 6.588 5.24 7.152-1.964 1.343-4.36 1.293-5.235 1.172-3.568-.492-6.902-3.433-7.007-7.711-.106-4.278 2.573-6.35 3.994-7.225z" />
  </StyledIcon>
));

Moon.displayName = 'Moon';

export { Moon };
