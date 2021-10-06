import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const StarHalf = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="StarHalf" {...props}>
    <g fill="none" fillRule="evenodd"><path fill="#000" fillOpacity=".2" d="M12 16.667V2l2.5 7.5H22L16 14l3 8z" /><path fill="#FFC95E" d="M12 16.667 5 22l3-8-6-4.5h7.5L12 2z" /></g>
  </StyledIcon>
));

StarHalf.displayName = 'StarHalf';

export { StarHalf };
