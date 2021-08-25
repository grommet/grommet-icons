import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Aid = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Aid" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 22h22V6H1v16zM8 6h8V2H8v4zm0 8h8m-4-4v8" />
  </StyledIcon>
));

Aid.displayName = 'Aid';

export { Aid };
