import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const PauseFill = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="PauseFill" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M3 21h6V3H3v18zm1-2h4V5H4v14zm1-2h2V7H5v10zm10 4h6V3h-6v18zm1-2h4V5h-4v14zm1-2h2V7h-2v10z" />
  </StyledIcon>
));

PauseFill.displayName = 'PauseFill';

export { PauseFill };
