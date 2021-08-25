import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Cloud = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Cloud" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M18 17v1c0 3-2 4-5 4h-2c-3 0-5-1-5-4v-1A5 5 0 0 1 6 7h6M6 7V6c0-3 2-4 5-4h2c3 0 5 1 5 4v1a5 5 0 0 1 0 10h-6" />
  </StyledIcon>
));

Cloud.displayName = 'Cloud';

export { Cloud };
