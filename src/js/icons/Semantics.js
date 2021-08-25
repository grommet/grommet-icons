import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Semantics = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Semantics" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m2 17 10-5 10 5v4l-10-5-10 5v-4zm0-9 10-5 10 5v4L12 7 2 12V8z" />
  </StyledIcon>
));

Semantics.displayName = 'Semantics';

export { Semantics };
