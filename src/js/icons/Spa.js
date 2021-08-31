import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Spa = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Spa" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 22c1.5 0 4-1 4-5.5S12 6 12 6s-4 6-4 10.5 2.5 5.5 4 5.5zm0 0c-1.5 0-2.953-.22-5-1.5C3 18 2.5 10 2.5 10s4.5.5 6.5 2m3 10c1.5 0 2.953-.22 5-1.5C21 18 21.5 10 21.5 10s-4.5.5-6.5 2" />
  </StyledIcon>
));

Spa.displayName = 'Spa';

export { Spa };
