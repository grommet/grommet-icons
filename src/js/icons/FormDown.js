import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FormDown = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FormDown" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m18 9-6 6-6-6" />
  </StyledIcon>
));

FormDown.displayName = 'FormDown';

export { FormDown };
