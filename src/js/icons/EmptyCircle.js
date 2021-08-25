import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const EmptyCircle = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="EmptyCircle" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-6a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
  </StyledIcon>
));

EmptyCircle.displayName = 'EmptyCircle';

export { EmptyCircle };
