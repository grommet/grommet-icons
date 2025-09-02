import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const StatusWarningFill = forwardRef((props, ref) => (
  <StyledIcon
    ref={ref}
    viewBox="0 0 24 24"
    a11yTitle="StatusWarningFill"
    {...props}
  >
    <path
      d="M9.3165 4.13051C10.4221 1.9194 13.5781 1.91937 14.6837 4.13051L21.4474 17.6588C22.4444 19.6535 20.9938 22.0006 18.7638 22.0006H5.23642C3.00636 22.0006 1.5557 19.6535 2.55283 17.6588L9.3165 4.13051Z"
      fill="#D36D00"
    />
  </StyledIcon>
));

StatusWarningFill.displayName = 'StatusWarningFill';
export { StatusWarningFill };
