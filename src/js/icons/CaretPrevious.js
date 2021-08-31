import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const CaretPrevious = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="CaretPrevious" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M18 2 6 12l12 10z" />
  </StyledIcon>
));

CaretPrevious.displayName = 'CaretPrevious';

export { CaretPrevious };
