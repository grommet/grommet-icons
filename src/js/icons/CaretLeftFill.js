import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const CaretLeftFill = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="CaretLeftFill" {...props}>
    <path d="M15 18V6l-6 6z" fill="#000" />
  </StyledIcon>
));

CaretLeftFill.displayName = 'CaretLeftFill';

export { CaretLeftFill };
