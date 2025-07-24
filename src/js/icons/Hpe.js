import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Hpe = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Hpe" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M2 6H46V18H2V6ZM5 9H43V15H5V9Z" fill="#00C781"/>
  </StyledIcon>
));

Hpe.displayName = 'Hpe';
export { Hpe };
