import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const CaretDown = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="CaretDown" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M22 8 12 20 2 8z" />
  </StyledIcon>
));

CaretDown.displayName = 'CaretDown';

export { CaretDown };
