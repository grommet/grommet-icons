import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Subtract = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Subtract" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M2 12h20" />
  </StyledIcon>
));

Subtract.displayName = 'Subtract';

export { Subtract };
