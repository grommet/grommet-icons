import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Launch = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Launch" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M7 9v5s-3 2-3 5v1h4l2 3h4l2-3h4v-1c0-3-3-5-3-5V9c0-4-3-8-5-8S7 5 7 9zm1 11h8M12 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </StyledIcon>
));

Launch.displayName = 'Launch';

export { Launch };
