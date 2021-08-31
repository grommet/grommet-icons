import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Split = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Split" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 22h22V2H1v20zM12 2v20V2z" />
  </StyledIcon>
));

Split.displayName = 'Split';

export { Split };
