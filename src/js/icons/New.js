import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const New = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="New" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 1v22M2 6l20 12m0-12L2 18" />
  </StyledIcon>
));

New.displayName = 'New';

export { New };
