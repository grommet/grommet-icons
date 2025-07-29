import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Wifi = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Wifi" {...props}>
    <path
      fill="none"
      strokeWidth="2"
      d="M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-4.243-6.243a6 6 0 0 1 8.486 0M4.929 10.93c3.905-3.905 10.237-3.905 14.142 0M2.101 8.1c5.467-5.468 14.331-5.468 19.798 0"
    />
  </StyledIcon>
));

Wifi.displayName = 'Wifi';

export { Wifi };
