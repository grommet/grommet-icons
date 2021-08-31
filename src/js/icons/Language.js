import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Language = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Language" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0 0c3 0 4-5 4-11S15 1 12 1 8 6 8 12s1 11 4 11zM2 16h20M2 8h20" />
  </StyledIcon>
));

Language.displayName = 'Language';

export { Language };
