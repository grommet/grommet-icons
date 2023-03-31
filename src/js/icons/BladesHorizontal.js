import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const BladesHorizontal = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="BladesHorizontal" {...props}>
    <path stroke="#000" strokeWidth="2" fill="none" d="M3 17h4m3 0h4m3 0h4M4 21h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1zm7 0h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1zm7 0h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1z" />
  </StyledIcon>
));

BladesHorizontal.displayName = 'BladesHorizontal';

export { BladesHorizontal };
