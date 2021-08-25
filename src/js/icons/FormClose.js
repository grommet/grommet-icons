import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FormClose = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FormClose" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m7 7 10 10M7 17 17 7" />
  </StyledIcon>
));

FormClose.displayName = 'FormClose';

export { FormClose };
