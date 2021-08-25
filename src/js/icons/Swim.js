import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Swim = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Swim" {...props}>
    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 13c.5.5 2.13-.112 3.262-.5 1.46-.5 3.238 0 2.738-.5l-2-2s-4.5 2.5-4 3zm-9 7c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1M2 16c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1M17.5 4l-5.278 3 3.278 3.5L12 12m7.222-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </StyledIcon>
));

Swim.displayName = 'Swim';

export { Swim };
