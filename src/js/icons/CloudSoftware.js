import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const CloudSoftware = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="CloudSoftware" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M8 23h8V12H8v11zm0-7h8m-4-4v4M6 6V5c0-3 1.5-4 4-4h4c2.5 0 4 1.5 4 4v1c3 0 5 2 5 5s-2 5-5 5M14 6H6c-3 0-5 1.5-5 5s2 5 5 5" />
  </StyledIcon>
));

CloudSoftware.displayName = 'CloudSoftware';

export { CloudSoftware };
