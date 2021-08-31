import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FormClock = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FormClock" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-10v4l3 1" />
  </StyledIcon>
));

FormClock.displayName = 'FormClock';

export { FormClock };
