import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Checkbox = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Checkbox" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M2 2h20v20H2z" />
  </StyledIcon>
));

Checkbox.displayName = 'Checkbox';

export { Checkbox };
