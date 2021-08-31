import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Undo = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Undo" {...props}>
    <path d="M7.18 4 8.6 5.44 6.06 8h9.71a6 6 0 0 1 0 12h-2v-2h2a4 4 0 0 0 0-8H6.06l2.54 2.51-1.42 1.41L2.23 9z" />
  </StyledIcon>
));

Undo.displayName = 'Undo';

export { Undo };
