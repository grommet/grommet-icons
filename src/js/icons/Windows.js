import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Windows = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Windows" {...props}>
    <path fill="#001589" fillRule="evenodd" d="M23.923 0 10.959 1.893v9.588l12.964-.102V0zM0 3.398l.009 8.155 9.773-.055-.004-9.432L0 3.398zm.008 17.283 9.773 1.344-.008-9.44-9.766-.063.001 8.159zm10.951 1.49L23.923 24l.004-11.326-12.986-.022.018 9.519z" />
  </StyledIcon>
));

Windows.displayName = 'Windows';

export { Windows };
