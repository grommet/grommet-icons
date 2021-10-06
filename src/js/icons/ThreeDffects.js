import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const ThreeDffects = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="ThreeDffects" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M11 3h2l9 3v11l-10 3.5L2 17V6.5L4 6l9 2.5-2 .5-9-2.5" />
  </StyledIcon>
));

ThreeDffects.displayName = 'ThreeDffects';

export { ThreeDffects };
