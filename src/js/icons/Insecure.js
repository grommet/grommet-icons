import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Insecure = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Insecure" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M7 6.919V6a4.724 4.724 0 0 1 5-5 4.724 4.724 0 0 1 5 5v5.052M12 23a7 7 0 1 0-7-7 7 7 0 0 0 7 7zm2.985-7h-5.97" />
  </StyledIcon>
));

Insecure.displayName = 'Insecure';

export { Insecure };
