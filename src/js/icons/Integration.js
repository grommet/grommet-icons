import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Integration = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Integration" {...props}>
    <path fill="none" stroke="#231F20" strokeWidth="2" d="M5 21h18V9H5m14 6H1V3h18" />
  </StyledIcon>
));

Integration.displayName = 'Integration';

export { Integration };
