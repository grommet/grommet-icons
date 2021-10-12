import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const StatusInfo = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Information Status" {...props}>
    <path
      fill="none"
      stroke="#000"
      strokeWidth="2"
      d="M2 3.99C2 2.892 2.898 2 3.99 2h16.02C21.108 2 22 2.898 22 3.99v16.02c0 1.099-.898 1.99-1.99 1.99H3.99A1.995 1.995 0 0 1 2 20.01V3.99zM12 10v8m0-12v2"
    />
  </StyledIcon>
));

StatusInfo.displayName = 'StatusInfo';

export { StatusInfo };
