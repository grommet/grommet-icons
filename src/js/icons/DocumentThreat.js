import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const DocumentThreat = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DocumentThreat" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M4.998 7V1H19.5L23 4.5V23h-6m1-22v5h5M9 23a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-12V9c0-1 0-2 2-2s2 1 2 2 0 2 2 2h2m-9 0h2v2H8v-2z" />
  </StyledIcon>
));

DocumentThreat.displayName = 'DocumentThreat';

export { DocumentThreat };
