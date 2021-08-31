import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Gift = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Gift" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M3 11h18v12H3V11zm-1 0V7h20v4H2zm10 12V7v16zM7 7h5s-2-5-5-5C3.5 2 3 7 7 7zm10.184 0h-5s1.816-5 5-5c3.316 0 4 5 0 5z" />
  </StyledIcon>
));

Gift.displayName = 'Gift';

export { Gift };
