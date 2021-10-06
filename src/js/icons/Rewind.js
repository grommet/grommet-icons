import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Rewind = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Rewind" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M22 3.5V20l-9-6v6L2 12l11-8v6z" />
  </StyledIcon>
));

Rewind.displayName = 'Rewind';

export { Rewind };
