import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const BottomCorner = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="BottomCorner" {...props}>
    <path
      d="M22 1C22.5523 1 23 1.44772 23 2V22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H21V2C21 1.44772 21.4477 1 22 1Z"
      fill="#000"
    />
  </StyledIcon>
));

BottomCorner.displayName = 'BottomCorner';
export { BottomCorner };
