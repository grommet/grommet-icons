import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const DocumentUser = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DocumentUser" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M4.998 9V1H19.5L23 4.5V23h-7m2-22v5h5M8 11a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM3 23v-1c0-4 3-5 5-5s5 1 5 5v1H3z" />
  </StyledIcon>
));

DocumentUser.displayName = 'DocumentUser';

export { DocumentUser };
