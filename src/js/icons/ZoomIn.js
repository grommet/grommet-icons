import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const ZoomIn = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="ZoomIn" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m16 16 7 7-7-7zm-6 2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-3V5m-5 5h10" />
  </StyledIcon>
));

ZoomIn.displayName = 'ZoomIn';

export { ZoomIn };
