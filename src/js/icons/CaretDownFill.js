import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const CaretDownFill = forwardRef((props, ref) => (
  <StyledIcon
    ref={ref}
    viewBox="0 0 24 24"
    a11yTitle="CaretDownFill"
    {...props}
  >
    <path
      d="M19.7932 6.20703C21.5748 6.20723 22.4669 8.3612 21.2072 9.62109L13.6213 17.207C12.8403 17.988 11.5742 17.9879 10.7932 17.207L3.20723 9.62109C1.94735 8.36117 2.83954 6.20707 4.6213 6.20703H19.7932Z"
      fill="#000"
    />
  </StyledIcon>
));

CaretDownFill.displayName = 'CaretDownFill';
export { CaretDownFill };
