import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Attraction = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Attraction" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m13 2 1.5.5L13 3V2zm1 16 1 5h-2l1-5zm0-1.5 2 6.5h-4l2-6.5zM12 6l9 5v2H3v-2l9-5zm-7.5 7h15c0 4.167 1.5 10 1.5 10H3s1.5-5.833 1.5-10zm0 0h15c0 4.167 1.5 10 1.5 10H3s1.5-5.833 1.5-10z" />
  </StyledIcon>
));

Attraction.displayName = 'Attraction';

export { Attraction };
