import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Basket = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Basket" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M2 12h20l-2 11H4L2 12zm18-4-6-7M4 8l6-7M1 8h22v4H1V8zm7 7v5m8-5v5m-4-5v5" />
  </StyledIcon>
));

Basket.displayName = 'Basket';

export { Basket };
