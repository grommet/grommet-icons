import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const StatusUnknown = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Status is unknown" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M2 3.99C2 2.892 2.898 2 3.99 2h16.02C21.108 2 22 2.898 22 3.99v16.02c0 1.099-.898 1.99-1.99 1.99H3.99A1.995 1.995 0 0 1 2 20.01V3.99zM12 15v-1c0-1 0-1.5 1-2s2-1 2-2.5c0-1-1-2.5-3-2.5s-3 1.264-3 3m3 6v2" />
  </StyledIcon>
));

StatusUnknown.displayName = 'StatusUnknown';

export { StatusUnknown };
