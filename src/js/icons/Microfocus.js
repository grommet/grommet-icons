import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Microfocus = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Microfocus" {...props}>
    <path fill="#0078EF" fillRule="evenodd" d="M1,5 L5,5 L5,19 L19,19 L19,23 L1,23 L1,5 Z M5,1 L23,1 L23,19 L19,19 L19,5 L5,5 L5,1 Z"/>
  </StyledIcon>
));

Microfocus.displayName = 'Microfocus';
export { Microfocus };
