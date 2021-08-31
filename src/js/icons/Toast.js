import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Toast = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Toast" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M8 2a4 4 0 0 0-2 7.465V16h12V9.465A4 4 0 0 0 16 2H8zm3.321 4.874a1.004 1.004 0 0 1 1.38-.37l1.715.991c.483.279.652.889.37 1.38l-.991 1.715a1.004 1.004 0 0 1-1.38.37L10.7 9.968a1.004 1.004 0 0 1-.37-1.379l.991-1.716zM8 18v2m4-2v5m4-5v3" />
  </StyledIcon>
));

Toast.displayName = 'Toast';

export { Toast };
