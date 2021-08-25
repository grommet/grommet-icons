import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const MailOption = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="MailOption" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 4h22v16H1V4zm0 1 11 8.5L23 5" />
  </StyledIcon>
));

MailOption.displayName = 'MailOption';

export { MailOption };
