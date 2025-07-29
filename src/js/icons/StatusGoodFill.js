import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const StatusGoodFill = forwardRef((props, ref) => (
  <StyledIcon
    ref={ref}
    viewBox="0 0 24 24"
    a11yTitle="StatusGoodFill"
    {...props}
  >
    <path
      d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
      fill="#000"
    />
  </StyledIcon>
));

StatusGoodFill.displayName = 'StatusGoodFill';
export { StatusGoodFill };
