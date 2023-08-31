import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Mail = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Mail" {...props}>
    <path fill="#01A982" fillRule="evenodd" d="M23 20V6l-11 9L1 6v14h22zm-11-8 10-8H2l10 8z" />
  </StyledIcon>
));

Mail.displayName = 'Mail';

export { Mail };
