import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const CheckboxSelected = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="CheckboxSelected" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M2 2h20v20H2V2zm3 11 5 4 9-11" />
  </StyledIcon>
));

CheckboxSelected.displayName = 'CheckboxSelected';

export { CheckboxSelected };
