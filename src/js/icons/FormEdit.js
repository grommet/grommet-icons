import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FormEdit = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FormEdit" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m11.996 8.336 3.497 3.498-3.497-3.498zm5.54-.54a.994.994 0 0 1-.004 1.416l-7.451 7.451L6 17.83l1.166-4.08 7.451-7.452a.997.997 0 0 1 1.416-.005l1.504 1.504z" />
  </StyledIcon>
));

FormEdit.displayName = 'FormEdit';

export { FormEdit };
