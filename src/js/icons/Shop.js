import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Shop = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Shop" {...props}>
    <path fill="none" stroke="#000" strokeLinecap="round" strokeWidth="2" d="M4 7h16v16H4V7zm4 2V5c0-2.21 1.795-4 4-4h0c2.21 0 4 1.795 4 4v4" />
  </StyledIcon>
));

Shop.displayName = 'Shop';

export { Shop };
