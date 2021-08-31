import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const ClearOption = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="ClearOption" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M10 4a2 2 0 1 1 4 0v6h6v4H4v-4h6V4zM4 14h16v8H4v-8zm12 8v-5.635M8 22v-5.635M12 22v-5.635" />
  </StyledIcon>
));

ClearOption.displayName = 'ClearOption';

export { ClearOption };
