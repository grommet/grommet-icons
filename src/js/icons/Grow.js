import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Grow = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Grow" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 16V7m0 4c0-3 0-6-7-6 0 3 0 6 7 6zm-8 5h16m-2 0-2 7H8l-2-7m6-9c0-3 0-6 7-6 0 3 0 6-7 6z" />
  </StyledIcon>
));

Grow.displayName = 'Grow';

export { Grow };
