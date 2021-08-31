import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Info = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Info" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M15 17c0-3 4-5 4-9s-3-7-7-7-7 3-7 7 4 6 4 9v3c0 2 1 3 3 3s3-1 3-3v-3zm-6 1h6" />
  </StyledIcon>
));

Info.displayName = 'Info';

export { Info };
