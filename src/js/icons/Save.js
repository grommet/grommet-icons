import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Save = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Save" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M3 2v19h18V3h-9v11m-4-3 4 4 4-4" />
  </StyledIcon>
));

Save.displayName = 'Save';

export { Save };
