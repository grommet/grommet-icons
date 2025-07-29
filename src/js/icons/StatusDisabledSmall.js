import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const StatusDisabledSmall = forwardRef((props, ref) => (
  <StyledIcon
    ref={ref}
    viewBox="0 0 12 12"
    a11yTitle="Status is disabled"
    {...props}
  >
    <rect width="10" height="10" x="1" y="1" fillRule="evenodd" rx="1" />
  </StyledIcon>
));

StatusDisabledSmall.displayName = 'StatusDisabledSmall';

export { StatusDisabledSmall };
