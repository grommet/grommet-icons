import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const ContactInfo = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="ContactInfo" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M5 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4 6v-2c0-2.25-1.787-4-4.036-4h.054C2.768 12 1 13.75 1 16v2M12 7h12M12 17h10m-10-5h7" />
  </StyledIcon>
));

ContactInfo.displayName = 'ContactInfo';

export { ContactInfo };
