import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Detach = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Detach" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m4 4 16 16m2-8-5.28 5.28M15 19l-2 2c-6 6-15-3-9-9l2-2m2-2 5-5c4-4 10 2 6 6l-5 5m-2 2-2 2c-2 2-5-1-3-3l2-2m2-2 5-5" />
  </StyledIcon>
));

Detach.displayName = 'Detach';

export { Detach };
