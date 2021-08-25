import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FacebookOption = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FacebookOption" {...props}>
    <path fill="#3B5998" fillRule="evenodd" d="M9.945 22v-8.834H7V9.485h2.945V6.54c0-3.043 1.926-4.54 4.64-4.54 1.3 0 2.418.097 2.744.14v3.18h-1.883c-1.476 0-1.82.703-1.82 1.732v2.433h3.68l-.736 3.68h-2.944L13.685 22" />
  </StyledIcon>
));

FacebookOption.displayName = 'FacebookOption';

export { FacebookOption };
