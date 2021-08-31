import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const CaretRightFill = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="CaretRightFill" {...props}>
    <path d="M9 6v12l6-6z" fill="#000" />
  </StyledIcon>
));

CaretRightFill.displayName = 'CaretRightFill';

export { CaretRightFill };
