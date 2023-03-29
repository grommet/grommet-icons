import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Certificate = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Certificate" {...props}>
    <path stroke="#000" strokeWidth="2" fill="none" d="M15 19H2V1h16v4m0 0a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm-3 9v8l3-2 3 2v-8M5 8h6m-6 3h5m-5 3h2M5 5h2" />
  </StyledIcon>
));

Certificate.displayName = 'Certificate';

export { Certificate };
