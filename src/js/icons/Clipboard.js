import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Clipboard = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Clipboard" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M16 3h5v20H3V3h5m0-2h8v5H8V1z" />
  </StyledIcon>
));

Clipboard.displayName = 'Clipboard';

export { Clipboard };
