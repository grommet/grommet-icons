import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const CircleInformation = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="CircleInformation" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-12v8m0-12v2" />
  </StyledIcon>
));

CircleInformation.displayName = 'CircleInformation';

export { CircleInformation };
