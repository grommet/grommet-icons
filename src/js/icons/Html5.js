import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Html5 = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Html5" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M3 2h18v16l-9 4-9-4V2zm14 4H8v5h8v5l-4 1.5L8 16v-2" />
  </StyledIcon>
));

Html5.displayName = 'Html5';

export { Html5 };
