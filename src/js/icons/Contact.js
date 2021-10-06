import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Contact = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Contact" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 2h21v16h-8l-8 4v-4H1V2zm5 8h1v1H6v-1zm5 0h1v1h-1v-1zm5 0h1v1h-1v-1z" />
  </StyledIcon>
));

Contact.displayName = 'Contact';

export { Contact };
