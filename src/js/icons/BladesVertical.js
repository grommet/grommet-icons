import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const BladesVertical = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="BladesVertical" {...props}>
    <path stroke="#000" strokeWidth="2" fill="none" d="M17 3v4m0 3v4m0 3v4m4-17v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zm0 7v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zm0 7v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1z" />
  </StyledIcon>
));

BladesVertical.displayName = 'BladesVertical';

export { BladesVertical };
