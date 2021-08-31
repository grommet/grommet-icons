import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Brush = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Brush" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M9.312 11.73a5.001 5.001 0 0 0-5.362 1.12c-1.953 1.952-1.414 8.485-1.414 8.485s6.532.538 8.485-1.415a5.001 5.001 0 0 0 1.12-5.362L22.334 4.364a1.997 1.997 0 0 0 0-2.828 1.995 1.995 0 0 0-2.828 0L9.312 11.729zm1.002-1.617 1.838 1.838 1.697 1.697" />
  </StyledIcon>
));

Brush.displayName = 'Brush';

export { Brush };
