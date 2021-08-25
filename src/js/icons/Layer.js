import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Layer = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Layer" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 1h16v16H1V1zm19 6h3v16H7v-3" />
  </StyledIcon>
));

Layer.displayName = 'Layer';

export { Layer };
