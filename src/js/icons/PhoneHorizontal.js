import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const PhoneHorizontal = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="PhoneHorizontal" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M23 7a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7zm-2 5.996V17H3V7h18v4.004a1.038 1.038 0 0 0-.094-.004h-1a1 1 0 0 0 0 2h1c.032 0 .063-.002.094-.004z" fill="#000" />
  </StyledIcon>
));

PhoneHorizontal.displayName = 'PhoneHorizontal';

export { PhoneHorizontal };
