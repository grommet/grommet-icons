import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const BottomCorner = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="BottomCorner" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M8 20h12V8" />
  </StyledIcon>
));

BottomCorner.displayName = 'BottomCorner';

export { BottomCorner };
