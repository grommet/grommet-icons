import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const TapeOption = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="TapeOption" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 2h21v20H2V7m10 12a7 7 0 0 1-7-7m7 7a7 7 0 0 0 0-14H1m11 4c-1.655 0-3 1.345-3 3s1.345 3 3 3 3-1.345 3-3-1.345-3-3-3z" />
  </StyledIcon>
));

TapeOption.displayName = 'TapeOption';

export { TapeOption };
