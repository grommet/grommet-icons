import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Mode = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Mode" {...props}>
    <path d="M12 7.55566C14.4546 7.55566 16.4443 9.5454 16.4443 12C16.4443 14.4546 14.4546 16.4443 12 16.4443V22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V7.55566Z" fill="#555555"/>
<path d="M12 7.55566C9.5454 7.55566 7.55566 9.5454 7.55566 12C7.55566 14.4546 9.5454 16.4443 12 16.4443V7.55566Z" fill="#555555"/>
  </StyledIcon>
));

Mode.displayName = 'Mode';
export { Mode };
