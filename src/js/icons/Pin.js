import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Pin = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Pin" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m16 3-6 6s-4-1-7 2l10 10c3-3 2-7 2-7l6-6-5-5zM1 23l7-7m6-15 9 9" />
  </StyledIcon>
));

Pin.displayName = 'Pin';

export { Pin };
