import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FormViewHide = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FormViewHide" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M3 12h3c.5 2.5 3.273 5 6 5s5.5-2.5 6-5h3m-9 5v3m-4.5-4.5-2 2m11-2 2 2" />
  </StyledIcon>
));

FormViewHide.displayName = 'FormViewHide';

export { FormViewHide };
