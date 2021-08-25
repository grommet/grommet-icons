import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FormAttachment = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FormAttachment" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m6 13.293 6.36-6.36c2.828-2.828 7.069 1.413 4.242 4.24l-6.361 6.36c-1.414 1.414-3.534-.706-2.12-2.12l6.36-6.36" />
  </StyledIcon>
));

FormAttachment.displayName = 'FormAttachment';

export { FormAttachment };
