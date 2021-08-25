import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const UserWorker = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="UserWorker" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M3 6h18H3zm7-4v2m4-2v2m2 8c2.374 1.183 4 3.65 4 7v4H4v-4c0-3.354 1.631-5.825 4-7m4 4.5V23m0-10a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm-4-1a4 4 0 1 0 8 0" />
  </StyledIcon>
));

UserWorker.displayName = 'UserWorker';

export { UserWorker };
