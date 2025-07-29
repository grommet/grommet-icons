import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FormSubtract = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FormSubtract" {...props}>
    <path fill="none" strokeWidth="2" d="M6 12h12" />
  </StyledIcon>
));

FormSubtract.displayName = 'FormSubtract';

export { FormSubtract };
