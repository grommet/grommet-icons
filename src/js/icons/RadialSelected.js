import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const RadialSelected = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="RadialSelected" {...props}>
    <path d="M12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6Z" fill="#555555"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="#555555"/>
  </StyledIcon>
));

RadialSelected.displayName = 'RadialSelected';
export { RadialSelected };
