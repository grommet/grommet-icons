import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Microphone = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Microphone" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M8 11c0 3 1.79 4 4 4s4-1 4-4V5c0-3-1.79-4-4-4S8 2 8 5v6zM4 9v2c0 5 3.582 8 8 8s8-3 8-8V9m-8 15v-5" />
  </StyledIcon>
));

Microphone.displayName = 'Microphone';

export { Microphone };
