import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Subtract = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Subtract" {...props}>
    <path
      d="M22 11C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H22Z"
      fill="#000"
    />
  </StyledIcon>
));

Subtract.displayName = 'Subtract';
export { Subtract };
