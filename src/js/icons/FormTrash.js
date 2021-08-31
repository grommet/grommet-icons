import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FormTrash = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FormTrash" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M7.5 9h9v10h-9V9zM5 9h14M9.364 6h5v3h-5V6zm1.181 5v6m3-6v6" />
  </StyledIcon>
));

FormTrash.displayName = 'FormTrash';

export { FormTrash };
