import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Play = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Play" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M2 3.6996C2.00033 2.1749 3.63875 1.21104 4.97168 1.95156L19.9121 10.2523C21.2835 11.0144 21.2835 12.9864 19.9121 13.7484L4.97168 22.0492C3.63882 22.7895 2.00042 21.8257 2 20.3012V3.6996ZM4 20.3012L18.9404 12.0004L4 3.6996V20.3012Z" fill="#555555"/>
  </StyledIcon>
));

Play.displayName = 'Play';
export { Play };
