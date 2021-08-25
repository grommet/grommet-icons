import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Hp = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Hp" {...props}>
    <path fill="#333" fillRule="evenodd" d="M8.421 0 5 15.127h2.138L10.56 0H8.421zm8.993 8.873-1.496 6.225h2.138l1.496-6.225h-2.138zm-3.635 0L10.36 24h2.138l3.42-15.127H13.78zm-3.647 0-1.497 6.225h2.138l1.496-6.225h-2.137z" />
  </StyledIcon>
));

Hp.displayName = 'Hp';

export { Hp };
