import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Tip = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Tip" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M16.007 18H22V2H2v16h6.243l3.882 4 3.882-4z" />
  </StyledIcon>
));

Tip.displayName = 'Tip';

export { Tip };
