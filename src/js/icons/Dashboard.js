import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Dashboard = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Dashboard" {...props}>
    <path
      fill="none"
      strokeWidth="2"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm3-6a3 3 0 0 0-6 0M5 5l2 2m5 0v6m0-10v2m7 7h2M3 12h2m12-5 2-2M3 17h18"
    />
  </StyledIcon>
));

Dashboard.displayName = 'Dashboard';

export { Dashboard };
