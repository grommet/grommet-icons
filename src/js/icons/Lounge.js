import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Lounge = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Lounge" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M5 5.997C5 5.447 5.45 5 6.007 5h11.986C18.55 5 19 5.453 19 5.997V13H5V5.997zM22 8v7.003c0 .55-.455.997-.992.997H2.992A.999.999 0 0 1 2 15.003V8m3 8v2-2zm14 0v2-2z" />
  </StyledIcon>
));

Lounge.displayName = 'Lounge';

export { Lounge };
