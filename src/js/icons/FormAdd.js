import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FormAdd = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FormAdd" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 18V6m-6 6h12" />
  </StyledIcon>
));

FormAdd.displayName = 'FormAdd';

export { FormAdd };
