import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Print = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Print" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M6 19H1V7h22v12h-5M3 16h18M6 16v7h12v-7m0-9V1H6v6m11 5h2v-1h-2v1z" />
  </StyledIcon>
));

Print.displayName = 'Print';

export { Print };
