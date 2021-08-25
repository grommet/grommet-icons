import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Tools = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Tools" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m11 2 11 11-4.5 4.5-11-11L11 2zm5 4 1-1 2 2-1 1m-5 5-9 9-2-2 9-9m-6 7 1 1" />
  </StyledIcon>
));

Tools.displayName = 'Tools';

export { Tools };
