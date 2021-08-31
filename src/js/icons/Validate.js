import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Validate = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Validate" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M20 15c-1 1 1.25 3.75 0 5s-4-1-5 0-1.5 3-3 3-2-2-3-3-3.75 1.25-5 0 1-4 0-5-3-1.5-3-3 2-2 3-3-1.25-3.75 0-5 4 1 5 0 1.5-3 3-3 2 2 3 3 3.75-1.25 5 0-1 4 0 5 3 1.5 3 3-2 2-3 3zM7 12l3 3 7-7" />
  </StyledIcon>
));

Validate.displayName = 'Validate';

export { Validate };
