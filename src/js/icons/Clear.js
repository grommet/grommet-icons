import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Clear = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Clear" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM5 5l14 14" />
  </StyledIcon>
));

Clear.displayName = 'Clear';

export { Clear };
