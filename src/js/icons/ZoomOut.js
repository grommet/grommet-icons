import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const ZoomOut = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="ZoomOut" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m16 16 7 7-7-7zm-6 2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-8h10" />
  </StyledIcon>
));

ZoomOut.displayName = 'ZoomOut';

export { ZoomOut };
