import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FormUp = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FormUp" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m18 15-6-6-6 6" />
  </StyledIcon>
));

FormUp.displayName = 'FormUp';

export { FormUp };
