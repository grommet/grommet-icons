import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Ticket = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Ticket" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M7 16h10V8H7v8zm13-4c0 2 1 3 3 3v5H1v-5c2 0 3-1 3-3S3 9 1 9V4h22v5c-2 0-3 1-3 3z" />
  </StyledIcon>
));

Ticket.displayName = 'Ticket';

export { Ticket };
