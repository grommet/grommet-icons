import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Erase = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Erase" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M7 21 22 6l-4-4L2 18l3 3h14M6 14l4 4" />
  </StyledIcon>
));

Erase.displayName = 'Erase';

export { Erase };
