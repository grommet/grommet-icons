import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Code = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Code" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m9 22 6-20m2 15 5-5-5-5M7 17l-5-5 5-5" />
  </StyledIcon>
));

Code.displayName = 'Code';

export { Code };
