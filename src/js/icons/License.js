import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const License = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="License" {...props}>
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      d="M10 13v3h3v3h3v2l2 2h5v-4L12.74 8.74C12.91 8.19 13 7.6 13 7c0-3.31-2.69-6-6-6S1 3.69 1 7a6.005 6.005 0 0 0 8.47 5.47L10 13zM6 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
    />
  </StyledIcon>
));

License.displayName = 'License';

export { License };
