import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const IceCream = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="IceCream" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M17 8c2 0 2-1.5.5-1.5 0-3-2-5.5-5.5-5.5S6.5 3.5 6.5 6.5C5 6.5 5 8 7 8m0 0h10l-5 13L7 8z" />
  </StyledIcon>
));

IceCream.displayName = 'IceCream';

export { IceCream };
