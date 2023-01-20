import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Bucket = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Bucket" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M4 10H2c0-5.523 0-9 10-9s10 3.477 10 9h-2m-8 0c4.418 0 8-.895 8-2s-3.582-2-8-2-8 .895-8 2 3.582 2 8 2ZM4 20c0 1.657 3.582 3 8 3s8-1.343 8-3m0-12v12V8ZM4 20V8v12Z" />
  </StyledIcon>
));

Bucket.displayName = 'Bucket';

export { Bucket };
