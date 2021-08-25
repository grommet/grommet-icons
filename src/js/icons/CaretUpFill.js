import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const CaretUpFill = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="CaretUpFill" {...props}>
    <path d="M6 15h12l-6-6-6 6z" fill="#000" />
  </StyledIcon>
));

CaretUpFill.displayName = 'CaretUpFill';

export { CaretUpFill };
