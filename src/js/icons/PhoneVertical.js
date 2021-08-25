import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const PhoneVertical = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="PhoneVertical" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M17 23a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h10zm-6-2H7V3h10v18h-4v-1.031a1 1 0 0 0-2 0V21z" fill="#000" />
  </StyledIcon>
));

PhoneVertical.displayName = 'PhoneVertical';

export { PhoneVertical };
