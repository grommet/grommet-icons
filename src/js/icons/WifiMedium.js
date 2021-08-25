import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const WifiMedium = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="WifiMedium" {...props}>
    <g fill="none" stroke="#000" strokeWidth="2"><path d="M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-4.243-6.243a6 6 0 0 1 8.486 0M4.929 10.93c3.905-3.905 10.237-3.905 14.142 0" /><path strokeOpacity=".2" d="M2.1 8.1c5.468-5.467 14.332-5.467 19.8 0" opacity=".8" /></g>
  </StyledIcon>
));

WifiMedium.displayName = 'WifiMedium';

export { WifiMedium };
