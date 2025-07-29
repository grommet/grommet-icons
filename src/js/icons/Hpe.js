import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Hpe = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Hpe" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 8.72726H24V15.2727H0V8.72726ZM1.63636 10.3636H22.3636V13.6364H1.63636V10.3636Z"
      fill="#00C781"
    />
  </StyledIcon>
));

Hpe.displayName = 'Hpe';
export { Hpe };
