import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FormFolder = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FormFolder" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M6 18V6h4.8l1.8 2.4H18V18z" />
  </StyledIcon>
));

FormFolder.displayName = 'FormFolder';

export { FormFolder };
