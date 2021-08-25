import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Emergency = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Emergency" {...props}>
    <path fillRule="evenodd" d="M10 7.172V2h4v5.172l3.657-3.657 2.828 2.828L16.828 10H22v4h-5.172l3.657 3.657-2.828 2.828L14 16.828V22h-4v-5.172l-3.657 3.657-2.828-2.828L7.172 14H2v-4h5.172L3.515 6.343l2.828-2.828L10 7.172z" />
  </StyledIcon>
));

Emergency.displayName = 'Emergency';

export { Emergency };
