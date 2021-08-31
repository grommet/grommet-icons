import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Connect = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Connect" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M10 21c-2.5 2.5-5 2-7 0s-2.5-4.5 0-7l3-3 7 7-3 3zm4-18c2.5-2.5 5-2 7.001 0 2.001 2 2.499 4.5 0 7l-3 3L11 6l3-3zm-3 7-2.5 2.5L11 10zm3 3-2.5 2.5L14 13z" />
  </StyledIcon>
));

Connect.displayName = 'Connect';

export { Connect };
