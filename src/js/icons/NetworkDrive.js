import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const NetworkDrive = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="NetworkDrive" {...props}>
    <path stroke="#000" strokeWidth="2" fill="none" d="M12 14v4M22 6v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zM12 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM6 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </StyledIcon>
));

NetworkDrive.displayName = 'NetworkDrive';

export { NetworkDrive };
