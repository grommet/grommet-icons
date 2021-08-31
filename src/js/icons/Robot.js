import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Robot = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Robot" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M18.348 15.954a7 7 0 1 0-12.622.156M12 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-17V3M9 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 4.988L5 16s.072-.772.5-.5c.93.591 3.074 1.5 6.5 1.5 3.554 0 5.618-.916 6.5-1.5.359-.238.5.5.5.5l-1 2.988S17.005 21 12 21s-6-2.012-6-2.012z" />
  </StyledIcon>
));

Robot.displayName = 'Robot';

export { Robot };
