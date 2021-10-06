import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Cursor = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Cursor" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m6 3 12 11-5 1 3 5.5-3 1.5-3-6-4 3z" />
  </StyledIcon>
));

Cursor.displayName = 'Cursor';

export { Cursor };
