import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

export const Plug = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox='0 0 24 24' a11yTitle='Plug' {...props}>
    <path fillRule='evenodd' clipRule='evenodd' d='M16 5V1h-2v4h-4V1H8v4H5v8a3 3 0 0 0 3 3h3v8h2v-8h3a3 3 0 0 0 3-3V5h-3zm-9 8V7h10v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z' fill='#000' />
  </StyledIcon>
  ));
