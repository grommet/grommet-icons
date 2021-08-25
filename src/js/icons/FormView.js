import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FormView = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FormView" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 17c-2.727 0-6-2.778-6-5s3.273-5 6-5 6 2.778 6 5-3.273 5-6 5zm-1-5a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
  </StyledIcon>
));

FormView.displayName = 'FormView';

export { FormView };
