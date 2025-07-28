import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Splits = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Splits" {...props}>
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      d="M1 22h22V2H1v20zM8 2v20V2zm8 0v20V2z"
    />
  </StyledIcon>
));

Splits.displayName = 'Splits';

export { Splits };
