import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Power = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Power" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M16 4c3.364 1.43 6 4.99 6 9 0 5.6-4.473 10-10 10S2 18.6 2 13c0-4.01 2.636-7.57 6-9m4-3v10" />
  </StyledIcon>
));

Power.displayName = 'Power';

export { Power };
