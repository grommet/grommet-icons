import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Compass = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Compass" {...props}>
    <path
      fill="none"
      strokeWidth="2"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-2-12 5-1-1 5-5 1 1-5zm2 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
    />
  </StyledIcon>
));

Compass.displayName = 'Compass';

export { Compass };
