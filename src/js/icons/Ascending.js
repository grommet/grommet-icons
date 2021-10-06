import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Ascending = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Ascending" {...props}>
    <path stroke="#000" strokeWidth="2" d="m12.08 7.286.354-.353.354.353L17 11.498l-.707.708-3.358-3.359V17h-1V8.847l-3.359 3.359-.707-.708 4.212-4.212z" clipRule="evenodd" />
  </StyledIcon>
));

Ascending.displayName = 'Ascending';

export { Ascending };
