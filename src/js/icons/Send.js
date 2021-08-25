import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Send = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Send" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M22 3 2 11l18.5 8L22 3zM10 20.5l3-4.5m2.5-6.5L9 14l.859 6.012c.078.546.216.537.306-.003L11 15l4.5-5.5z" />
  </StyledIcon>
));

Send.displayName = 'Send';

export { Send };
