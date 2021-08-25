import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Flag = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Flag" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M2 24V2c8-3.524 11 4.644 20 0v12c-8 4.895-13-4.103-20 0" />
  </StyledIcon>
));

Flag.displayName = 'Flag';

export { Flag };
