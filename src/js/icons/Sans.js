import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Sans = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Sans" {...props}>
    <path stroke="#000" strokeWidth="2" fill="none" d="M1 12h22M2 22h20a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1zM5 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </StyledIcon>
));

Sans.displayName = 'Sans';

export { Sans };
