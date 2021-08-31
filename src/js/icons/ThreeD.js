import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const ThreeD = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="ThreeD" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M2 5.5v13l10 4 10-4v-13l-10-4-10 4zM13 12h5v5M2 5.5l10 4 10-4M6 14s6 6.5 12-2" />
  </StyledIcon>
));

ThreeD.displayName = 'ThreeD';

export { ThreeD };
