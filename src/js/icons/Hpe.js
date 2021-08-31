import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Hpe = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 48 24" a11yTitle="Hpe" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M2 6h44v12H2V6zm3 3h38v6H5V9z" fill="#00C781" />
  </StyledIcon>
));

Hpe.displayName = 'Hpe';

export { Hpe };
