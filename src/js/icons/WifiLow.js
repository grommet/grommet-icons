import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const WifiLow = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="WifiLow" {...props}>
    <g fill="none" stroke="#000" strokeWidth="2">
      <path d="M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-4.243-6.243a6 6 0 0 1 8.486 0" />
      <path
        strokeOpacity=".2"
        d="M4.929 10.929c3.905-3.905 10.237-3.905 14.142 0M2.101 8.1c5.467-5.468 14.331-5.468 19.798 0"
        opacity=".8"
      />
    </g>
  </StyledIcon>
));

WifiLow.displayName = 'WifiLow';

export { WifiLow };
