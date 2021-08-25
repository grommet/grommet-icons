import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Network = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Network" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M7.5 7v8.514c0 4.243 5.5 2.829 5.5 6.6V24m-2-14L7.5 7 4 10m12.5-8v8.44c0 4.068-3.5 2.712-3.5 6.328V24m0-19 3.5-3L20 5" />
  </StyledIcon>
));

Network.displayName = 'Network';

export { Network };
