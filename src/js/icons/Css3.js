import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Css3 = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Css3" {...props}>
    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 3h14l-3 15-8 4-7-4 1-4m1-5h14" />
  </StyledIcon>
));

Css3.displayName = 'Css3';

export { Css3 };
