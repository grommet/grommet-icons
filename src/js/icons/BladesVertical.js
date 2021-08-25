import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const BladesVertical = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="BladesVertical" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v2h12V4H4zm14 0v2h2V4h-2zM2 11a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2zm2 0v2h12v-2H4zm16 2h-2v-2h2v2zM4 16a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H4zm0 4v-2h12v2H4zm14 0h2v-2h-2v2z" fill="#000" />
  </StyledIcon>
));

BladesVertical.displayName = 'BladesVertical';

export { BladesVertical };
