import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Bike = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Bike" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M5 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM5 6h5m9 9L16 5h-3M9 9l-4 6h7c0-3 2-6 5-6H9zm0 0L7 6" />
  </StyledIcon>
));

Bike.displayName = 'Bike';

export { Bike };
