import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const StepsOption = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="StepsOption" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M24 9h-5v5h-5v5H9v5m-8 0v-7.003c0-.55.313-1.31.703-1.7L15.297 1.703c.388-.388 1.156-.703 1.7-.703H24" />
  </StyledIcon>
));

StepsOption.displayName = 'StepsOption';

export { StepsOption };
