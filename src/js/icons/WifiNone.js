import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const WifiNone = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="WifiNone" {...props}>
    <g fill="none" stroke="#000" strokeWidth="2"><circle cx="12" cy="18" r="2" /><path strokeOpacity=".2" d="M7.757 13.757a6 6 0 0 1 8.486 0M4.929 10.93c3.905-3.905 10.237-3.905 14.142 0M2.101 8.1c5.467-5.468 14.331-5.468 19.798 0" opacity=".8" /></g>
  </StyledIcon>
));

WifiNone.displayName = 'WifiNone';

export { WifiNone };
