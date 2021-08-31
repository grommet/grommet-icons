import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FormLock = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FormLock" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M9 11V8a3 3 0 0 1 6 0v3m-3 2v3m5 2v-7H7v7h10z" />
  </StyledIcon>
));

FormLock.displayName = 'FormLock';

export { FormLock };
