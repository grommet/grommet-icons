import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Install = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Install" {...props}>
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      d="M19 13.5v4L12 22l-7-4.5v-4m7 8.5v-8.5m6.5-5-6.5-4L15.5 2 22 6l-3.5 2.5zm-13 0 6.5-4L8.5 2 2 6l3.5 2.5zm13 .5L12 13l3.5 2.5 6.5-4L18.5 9zm-13 0 6.5 4-3.5 2.5-6.5-4L5.5 9z"
    />
  </StyledIcon>
));

Install.displayName = 'Install';

export { Install };
