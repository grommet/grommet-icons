import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const StatusUnknownSmall = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 12 12" a11yTitle="StatusUnknownSmall" {...props}>
    <rect width="10" height="10" x="1" y="1" fillRule="evenodd" stroke="#000" rx="1" />
  </StyledIcon>
));

StatusUnknownSmall.displayName = 'StatusUnknownSmall';

export { StatusUnknownSmall };
