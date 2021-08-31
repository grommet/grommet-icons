import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const CaretNext = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="CaretNext" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m6 2 12 10L6 22z" />
  </StyledIcon>
));

CaretNext.displayName = 'CaretNext';

export { CaretNext };
