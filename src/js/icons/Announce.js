import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Announce = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Announce" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M11 15c3 0 8 4 8 4V3s-5 4-8 4v8zm-6 0 3 8h4l-3-8m10-1a3 3 0 1 0 0-6m-8 11c1 0 3-1 3-3M2 11c0-3.111 1.791-4 4-4h5v8H6c-2.209 0-4-.889-4-4z" />
  </StyledIcon>
));

Announce.displayName = 'Announce';

export { Announce };
