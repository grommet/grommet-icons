import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Menu = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Menu" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M2 19h20M2 5h20M2 12h20" />
  </StyledIcon>
));

Menu.displayName = 'Menu';

export { Menu };
