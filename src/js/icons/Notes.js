import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Notes = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Notes" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M3 1v22h13l5-5V1H3zm3 16h5m-5-4h12M6 9h10M3 5h18m0 12h-6v6" />
  </StyledIcon>
));

Notes.displayName = 'Notes';

export { Notes };
