import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Globe = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Globe" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M2 8s3.5 1 5 2 .564 2.42 1 3c.436.58 2-1 2 2s3 1 3 4 2.5 2.5 3 1 2.233-3.134 2-5c-.233-1.866-1-3-3-3s-3.5-.5-4-2 3-2 2-5 0-4 0-4m10 11c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11z" />
  </StyledIcon>
));

Globe.displayName = 'Globe';

export { Globe };
