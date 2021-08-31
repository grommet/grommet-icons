import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const HostMaintenance = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="HostMaintenance" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m14 23 6-6m1-3a2 2 0 1 0 2 2M17 4h1v1h-1V4zm-7 19H3V1h18v10M3 13h14M3 18h10M3 8h18" />
  </StyledIcon>
));

HostMaintenance.displayName = 'HostMaintenance';

export { HostMaintenance };
