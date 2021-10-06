import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Bundle = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Bundle" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M17 14H7h10zm0-11h6v10h-6M1 13v4h6m10 0h6v-4M1 17v4h6m16-4v4h-6M7 22h10V2H7v20zm0-9H1V3h6" />
  </StyledIcon>
));

Bundle.displayName = 'Bundle';

export { Bundle };
