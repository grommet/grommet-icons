import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Indicator = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Indicator" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7-3A7 7 0 0 0 5 8c0 1.933.5 3 2 5s3 3.5 3 6v4h4v-4c0-2.5 1.5-4 3-6s2-3.067 2-5z" />
  </StyledIcon>
));

Indicator.displayName = 'Indicator';

export { Indicator };
