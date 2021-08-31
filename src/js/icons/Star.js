import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Star = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Star" {...props}>
    <path fill="#FFC95E" fillRule="evenodd" d="M12 16.667 5 22l3-8-6-4.5h7.5L12 2l2.5 7.5H22L16 14l3 8z" />
  </StyledIcon>
));

Star.displayName = 'Star';

export { Star };
