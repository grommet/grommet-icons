import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Pan = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Pan" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M8.5 5.5 12 2l3.5 3.5M22 12H2m3.5-3.5L2 12l3.5 3.5m13 0L22 12l-3.5-3.5M12 22V2M8.5 18.5 12 22l3.5-3.5" />
  </StyledIcon>
));

Pan.displayName = 'Pan';

export { Pan };
