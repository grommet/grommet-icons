import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Favorite = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Favorite" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 8.4C1 4 4.5 3 6.5 3 9 3 11 5 12 6.5 13 5 15 3 17.5 3c2 0 5.5 1 5.5 5.4C23 15 12 21 12 21S1 15 1 8.4z" />
  </StyledIcon>
));

Favorite.displayName = 'Favorite';

export { Favorite };
