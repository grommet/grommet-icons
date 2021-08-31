import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Duplicate = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Duplicate" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M4.5 17H1V1h16v3.5M7 7h16v16H7V7zm8 4v8-8zm-4 4h8-8z" />
  </StyledIcon>
));

Duplicate.displayName = 'Duplicate';

export { Duplicate };
