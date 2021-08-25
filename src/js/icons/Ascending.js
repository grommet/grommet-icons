import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Ascending = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Ascending" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="m12.08 7.286.354-.353.354.353L17 11.498l-.707.708-3.358-3.359V17h-1V8.847l-3.359 3.359-.707-.708 4.212-4.212z" fill="#000" />
  </StyledIcon>
));

Ascending.displayName = 'Ascending';

export { Ascending };
