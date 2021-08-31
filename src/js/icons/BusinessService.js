import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const BusinessService = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="BusinessService" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M4 23H1V5h22v18h-7M8 5V1h8v4M9 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5.008 1.876a4 4 0 1 0-1.244-7.193m-5.062 5.043A4 4 0 0 0 10 23a4 4 0 0 0 1.401-7.748" />
  </StyledIcon>
));

BusinessService.displayName = 'BusinessService';

export { BusinessService };
