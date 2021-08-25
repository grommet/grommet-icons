import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Dislike = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Dislike" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M23 1H4C2 1 1 2 1 4v10h7v6c0 2 1 3 3 3h2s.016-6 .016-7.326C13.016 14.348 14 13 16 13h7V1zm-5 0v12" />
  </StyledIcon>
));

Dislike.displayName = 'Dislike';

export { Dislike };
