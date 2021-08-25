import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FormLocation = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FormLocation" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 17s-4-3-4-6c0-2.5 2-4 4-4s4 1.5 4 4c0 3-4 6-4 6zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </StyledIcon>
));

FormLocation.displayName = 'FormLocation';

export { FormLocation };
