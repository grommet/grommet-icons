import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FormPrevious = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FormPrevious" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m15 6-6 6 6 6" />
  </StyledIcon>
));

FormPrevious.displayName = 'FormPrevious';

export { FormPrevious };
