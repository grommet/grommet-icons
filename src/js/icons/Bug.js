import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Bug = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Bug" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M23 20c-1.38-2.09-3-3-4-3M5 17c-1 0-2.62.91-4 3M19 9c3 0 4-3 4-3M1 6s1 3 4 3m14 4h5-5zM5 13H0h5zm7 10V12v11zm0 0c-4 0-7-3-7-7V9s3-2.012 7-2c4 .012 7 2 7 2v7c0 4-3 7-7 7zM7 8V6c0-2.76 2.24-5 5-5s5 2.24 5 5v2" />
  </StyledIcon>
));

Bug.displayName = 'Bug';

export { Bug };
