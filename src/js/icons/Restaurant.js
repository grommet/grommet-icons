import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Restaurant = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Restaurant" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M19 18H5h14zm-7 0v-6 6zm3 0v-4 4zm-6 0v-4 4zm10 4V11.33a3.001 3.001 0 1 0-2.08-5.63C16.55 3.874 14.46 2 12 2S7.45 3.874 7.08 5.7A3 3 0 1 0 5 11.33V22h14z" />
  </StyledIcon>
));

Restaurant.displayName = 'Restaurant';

export { Restaurant };
