import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Next = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Next" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m7 2 10 10L7 22" />
  </StyledIcon>
));

Next.displayName = 'Next';

export { Next };
