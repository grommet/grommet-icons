import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FormRefresh = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FormRefresh" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M17.333 9.333C16.398 7.36 14.358 6 12 6a6 6 0 1 0 6 6m.5-6v4h-4" />
  </StyledIcon>
));

FormRefresh.displayName = 'FormRefresh';

export { FormRefresh };
