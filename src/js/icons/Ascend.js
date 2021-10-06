import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Ascend = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Ascend" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m2 8 6-6 6 6m-3 13h11m-11-4h8m-8-4h5M8 2v20" />
  </StyledIcon>
));

Ascend.displayName = 'Ascend';

export { Ascend };
