import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Edit = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Edit" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m14 4 6 6-6-6zm8.294 1.294c.39.39.387 1.025-.008 1.42L9 20l-7 2 2-7L17.286 1.714a1 1 0 0 1 1.42-.008l3.588 3.588zM3 19l2 2m2-4 8-8" />
  </StyledIcon>
));

Edit.displayName = 'Edit';

export { Edit };
