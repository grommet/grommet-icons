import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Update = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Update" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1.75 16.002C3.353 20.098 7.338 23 12 23c6.075 0 11-4.925 11-11m-.75-4.002C20.649 3.901 16.663 1 12 1 5.925 1 1 5.925 1 12m8 4H1v8M23 0v8h-8" />
  </StyledIcon>
));

Update.displayName = 'Update';

export { Update };
