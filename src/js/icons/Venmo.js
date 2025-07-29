import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Venmo = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Venmo" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 12C24 18.628 18.628 24 12 24C5.373 24 0 18.628 0 12C0 5.373 5.373 0 12 0C18.628 0 24 5.373 24 12ZM18.018 8.429C18.018 7.429 17.808 6.639 17.341 5.871L13.306 6.685C13.562 7.22 13.726 7.87 13.726 8.825C13.726 10.569 12.489 13.128 11.486 14.755L10.413 6.15L5.982 6.57L8.012 18.664H13.072C15.288 15.757 18.018 11.617 18.018 8.43V8.429Z"
      fill="#008CFF"
    />
  </StyledIcon>
));

Venmo.displayName = 'Venmo';
export { Venmo };
