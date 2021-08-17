import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

export const FormNext = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FormNext" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m9 6 6 6-6 6" />
  </StyledIcon>
));
