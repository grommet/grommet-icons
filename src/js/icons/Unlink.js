import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Unlink = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Unlink" {...props}>
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      d="m17 11 4.586 4.586a1.998 1.998 0 0 1 0 2.828l-3.172 3.172a1.998 1.998 0 0 1-2.828 0L11 17m6-9h4m-5-1V3M8 21v-4m-5-1h4m0-3L2.414 8.414a1.998 1.998 0 0 1 0-2.828l3.172-3.172a1.998 1.998 0 0 1 2.828 0L13 7"
    />
  </StyledIcon>
));

Unlink.displayName = 'Unlink';

export { Unlink };
