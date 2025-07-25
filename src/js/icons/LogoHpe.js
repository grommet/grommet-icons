import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const LogoHpe = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 49 24" a11yTitle="LogoHpe" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M2.44568 6H46.4457V18H2.44568V6ZM5.44568 9H43.4457V15H5.44568V9Z" fill="#01A982"/>
  </StyledIcon>
));

LogoHpe.displayName = 'LogoHpe';
export { LogoHpe };
