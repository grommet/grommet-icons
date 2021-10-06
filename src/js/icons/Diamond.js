import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Diamond = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Diamond" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M6 3h12l4 6-10 12L2 9l4-6zM2 9h20M11 3 7 9l5 11m1-17 4 6-5 11" />
  </StyledIcon>
));

Diamond.displayName = 'Diamond';

export { Diamond };
