import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const VolumeLow = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="VolumeLow" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 8v8h5.099L12 21V3L6 8H1zm14 8a4 4 0 1 0 0-8" />
  </StyledIcon>
));

VolumeLow.displayName = 'VolumeLow';

export { VolumeLow };
