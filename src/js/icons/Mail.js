import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Mail = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Mail" {...props}>
    <path
      fill="#01A982"
      fillRule="evenodd"
      d="M2 3a2 2 0 0 0-2 2v.465a1 1 0 0 0 .445.832l10.446 6.963a2 2 0 0 0 2.218 0l10.446-6.963A1 1 0 0 0 24 5.465V5a2 2 0 0 0-2-2H2Zm1 19h18a3 3 0 0 0 3-3V8l-10.336 6.89a3 3 0 0 1-3.328 0L0 8v11a3 3 0 0 0 3 3Z"
      clipRule="evenodd"
    />
  </StyledIcon>
));

Mail.displayName = 'Mail';

export { Mail };
