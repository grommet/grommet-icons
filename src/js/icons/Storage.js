import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Storage = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Storage" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M2 5.077S3.667 2 12 2s10 3.077 10 3.077v13.846S20.333 22 12 22 2 18.923 2 18.923V5.077zM2 13s3.333 3 10 3 10-3 10-3M2 7s3.333 3 10 3 10-3 10-3" />
  </StyledIcon>
));

Storage.displayName = 'Storage';

export { Storage };
