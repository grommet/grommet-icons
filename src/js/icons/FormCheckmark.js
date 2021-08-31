import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FormCheckmark = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FormCheckmark" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m6 13 4.2 3.6L18 7" />
  </StyledIcon>
));

FormCheckmark.displayName = 'FormCheckmark';

export { FormCheckmark };
