import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Cart = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Cart" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M5 5h17l-2 9H7L4 2H0m7 12 1 4h13m-2 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM9 23a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
  </StyledIcon>
));

Cart.displayName = 'Cart';

export { Cart };
