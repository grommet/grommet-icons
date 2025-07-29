import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Spectrum = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Spectrum" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M22.131 23.3985H13.1254C12.3296 23.3985 11.6186 22.7794 11.6216 21.9822C11.6404 17.0235 10.7441 15.3979 8.86913 13.7584C6.9 12.0372 3.45525 11.7034 1.49438 11.664C0.673128 11.6475 0.0168777 10.98 0.0153777 10.1573L2.67615e-06 1.53303C-0.00149732 0.727903 0.627753 0.0581529 1.431 0.0221529C4.38075 -0.109847 11.0633 0.206278 16.5218 4.97853C20.9546 8.85378 23.3453 14.5204 23.6393 21.8378C23.6734 22.6905 22.983 23.3985 22.131 23.3985Z" fill="#7B2DFB"/>
  </StyledIcon>
));

Spectrum.displayName = 'Spectrum';
export { Spectrum };
