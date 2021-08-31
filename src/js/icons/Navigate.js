import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Navigate = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Navigate" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m20 11 2-3-2-3h-8v6h8zm-8 13V0M4 2 2 5l2 3h8V2H4z" />
  </StyledIcon>
));

Navigate.displayName = 'Navigate';

export { Navigate };
