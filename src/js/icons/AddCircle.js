import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const AddCircle = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="AddCircle" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-4V6m-6 6h12" />
  </StyledIcon>
));

AddCircle.displayName = 'AddCircle';

export { AddCircle };
