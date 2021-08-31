import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Chat = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Chat" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M19 1H5a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12l6 5V5a4 4 0 0 0-4-4zm0 6H6m13 4h-9" />
  </StyledIcon>
));

Chat.displayName = 'Chat';

export { Chat };
