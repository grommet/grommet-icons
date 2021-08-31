import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Fan = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Fan" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm3-3c4 3 5 7 5 7m-8 4c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-14c3-5 7-6 7-6m-7 12c-3 4-7 5-7 5m4-8C5 9 4 5 4 5" />
  </StyledIcon>
));

Fan.displayName = 'Fan';

export { Fan };
