import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const ServicePlay = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="ServicePlay" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12zm7.995 3.657a6 6 0 1 0-1.89-10.22m-8.281 6.255A6 6 0 0 0 9 23a6 6 0 0 0 2.127-11.612M6.5 6 8 7 6.5 8V6z" />
  </StyledIcon>
));

ServicePlay.displayName = 'ServicePlay';

export { ServicePlay };
