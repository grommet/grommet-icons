import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Pause = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Pause" {...props}>
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      d="M3 21h6V3H3v18zm12 0h6V3h-6v18z"
    />
  </StyledIcon>
));

Pause.displayName = 'Pause';

export { Pause };
