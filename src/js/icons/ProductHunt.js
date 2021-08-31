import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const ProductHunt = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="ProductHunt" {...props}>
    <path fill="#DA552F" fillRule="evenodd" d="M13.6 8.4h-3.4V12h3.4a1.8 1.8 0 1 0 0-3.6m0 6h-3.4V18H7.8V6h5.8a4.2 4.2 0 1 1 0 8.4M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12c6.627 0 12-5.372 12-12S18.627 0 12 0" />
  </StyledIcon>
));

ProductHunt.displayName = 'ProductHunt';

export { ProductHunt };
