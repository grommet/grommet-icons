import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Attachment = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Attachment" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m22 12-9 9c-6 6-15-3-9-9l9-9c4-4 10 2 6 6l-9 9c-2 2-5-1-3-3l9-9" />
  </StyledIcon>
));

Attachment.displayName = 'Attachment';

export { Attachment };
