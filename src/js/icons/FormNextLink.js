import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FormNextLink = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FormNextLink" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M6 12.4h12M12.6 7l5.4 5.4-5.4 5.4" />
  </StyledIcon>
));

FormNextLink.displayName = 'FormNextLink';

export { FormNextLink };
