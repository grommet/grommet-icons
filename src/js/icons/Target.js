import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Target = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Target" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-5 0c0-3.309-2.691-6-6-6s-6 2.691-6 6 2.691 6 6 6 6-2.691 6-6zm-5 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
  </StyledIcon>
));

Target.displayName = 'Target';

export { Target };
