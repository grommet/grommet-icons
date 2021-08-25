import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Run = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Run" {...props}>
    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 11 3 2m0-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM9.5 9.5 9.525 6H15L8 17H4m11-9-3 5 .5 1L17 7.5 15 6m-4 7 5 3.5v5" />
  </StyledIcon>
));

Run.displayName = 'Run';

export { Run };
