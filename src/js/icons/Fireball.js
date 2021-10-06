import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Fireball = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Fireball" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-9-1.75 1 .75-2-1.25-1h1.5L12 9.25l.75 1.75h1.5L13 12l.75 2L12 13z" />
  </StyledIcon>
));

Fireball.displayName = 'Fireball';

export { Fireball };
