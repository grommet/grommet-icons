import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Mouse = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Mouse" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M6 9a6 6 0 1 1 12 0v6a6 6 0 0 1-12 0V9zm2 2v4a4 4 0 0 0 8 0v-4H8zm8-2a4.002 4.002 0 0 0-3-3.874V9h3zm-5 0H8a4.002 4.002 0 0 1 3-3.874V9z" fill="#000" />
  </StyledIcon>
));

Mouse.displayName = 'Mouse';

export { Mouse };
