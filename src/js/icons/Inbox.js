import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Inbox = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Inbox" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 13 6 2h12l5 11v9H1v-9zm0 0h7v3h8v-3h7" />
  </StyledIcon>
));

Inbox.displayName = 'Inbox';

export { Inbox };
