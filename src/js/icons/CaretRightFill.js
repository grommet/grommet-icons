import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const CaretRightFill = forwardRef((props, ref) => (
  <StyledIcon
    ref={ref}
    viewBox="0 0 24 24"
    a11yTitle="CaretRightFill"
    {...props}
  >
    <path
      d="M6 4.41402C6.00004 2.63226 8.15414 1.74007 9.41406 2.99996L17 10.5859C17.7809 11.3669 17.781 12.633 17 13.414L9.41406 21C8.19346 22.2204 6.13332 21.4211 6.00586 19.75L6 19.5859V4.41402Z"
      fill="#000"
    />
  </StyledIcon>
));

CaretRightFill.displayName = 'CaretRightFill';
export { CaretRightFill };
