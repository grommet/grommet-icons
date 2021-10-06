import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Iteration = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Iteration" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 9v14h14M5 5v14h14M9 15h14V1H9v14z" />
  </StyledIcon>
));

Iteration.displayName = 'Iteration';

export { Iteration };
