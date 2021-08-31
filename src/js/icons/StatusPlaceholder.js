import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const StatusPlaceholder = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="StatusPlaceholder" {...props}>
    <rect width="20" height="20" x="2" y="2" fill="none" stroke="#000" strokeWidth="2" rx="2" />
  </StyledIcon>
));

StatusPlaceholder.displayName = 'StatusPlaceholder';

export { StatusPlaceholder };
