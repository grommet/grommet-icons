import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Aed = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Aed" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M2 8.4C2 4 5 3 7 3s4 2 5 3.5C13 5 15 3 17 3s5 1 5 5.4C22 15 12 21 12 21S2 15 2 8.4zM12 6c-.5-.5-2 4-2 4h2v2.5L14 9h-2s1-6 5-6c-4 0-5 3-5 3z" />
  </StyledIcon>
));

Aed.displayName = 'Aed';

export { Aed };
