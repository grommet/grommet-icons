import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Aggregate = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Aggregate" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M8 15h7V8a7 7 0 1 0-7 7zm8-6H9v7a7 7 0 1 0 7-7z" />
  </StyledIcon>
));

Aggregate.displayName = 'Aggregate';

export { Aggregate };
