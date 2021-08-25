import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Hide = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Hide" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 17c-2.727 0-6-2.778-6-5s3.273-5 6-5 6 2.778 6 5-3.273 5-6 5zm-1-5a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm9-7L4 19" />
  </StyledIcon>
));

Hide.displayName = 'Hide';

export { Hide };
