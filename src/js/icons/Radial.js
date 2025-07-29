import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Radial = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Radial" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
      fill="#000"
    />
  </StyledIcon>
));

Radial.displayName = 'Radial';
export { Radial };
