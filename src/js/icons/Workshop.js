import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Workshop = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Workshop" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M19 7s-5 7-12.5 7c-2 0-5.5 1-5.5 5v4h11v-4c0-2.5 3-1 7-8l-1.5-1.5M3 5V2h20v14h-3M11 1h4v2h-4V1zM6.5 14a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
  </StyledIcon>
));

Workshop.displayName = 'Workshop';

export { Workshop };
