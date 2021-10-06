import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Bluetooth = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Bluetooth" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m7 7 10 9-5 4V4l5 4-10 8" />
  </StyledIcon>
));

Bluetooth.displayName = 'Bluetooth';

export { Bluetooth };
