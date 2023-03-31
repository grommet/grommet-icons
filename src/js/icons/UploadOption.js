import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const UploadOption = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="UploadOption" {...props}>
    <path stroke="#000" strokeWidth="2" fill="none" d="m17 12-5-5-5 5m5-4v10m0 5c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z" />
  </StyledIcon>
));

UploadOption.displayName = 'UploadOption';

export { UploadOption };
