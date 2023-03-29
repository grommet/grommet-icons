import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const CircleAlert = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="CircleAlert" {...props}>
    <path stroke="#000" strokeWidth="2" fill="none" d="M12 14V6m0 12v-2m0-14C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
  </StyledIcon>
));

CircleAlert.displayName = 'CircleAlert';

export { CircleAlert };
