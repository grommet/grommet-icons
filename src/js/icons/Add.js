import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Add = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Add" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 22V2M2 12h20" />
  </StyledIcon>
));

Add.displayName = 'Add';

export { Add };
