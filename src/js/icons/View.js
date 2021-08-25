import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const View = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="View" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 21c-5 0-11-5-11-9s6-9 11-9 11 5 11 9-6 9-11 9zm0-14a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
  </StyledIcon>
));

View.displayName = 'View';

export { View };
