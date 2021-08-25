import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Wheelchair = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Wheelchair" {...props}>
    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 3v9h7l2 6h2m-6-9H9a6 6 0 1 0 6 6M11 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </StyledIcon>
));

Wheelchair.displayName = 'Wheelchair';

export { Wheelchair };
