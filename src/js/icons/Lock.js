import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Lock = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Lock" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M19 23V11H5v12h14zm-7-8v4m5-8V7c0-3 0-6-5-6S7 4 7 7v4" />
  </StyledIcon>
));

Lock.displayName = 'Lock';

export { Lock };
