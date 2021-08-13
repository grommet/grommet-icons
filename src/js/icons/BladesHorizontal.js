import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

export const BladesHorizontal = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox='0 0 24 24' a11yTitle='BladesHorizontal' {...props}>
    <path fillRule='evenodd' clipRule='evenodd' d='M4 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0 2h2v12H4V4zm0 14v2h2v-2H4zm7-16a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2zm0 2h2v12h-2V4zm0 14h2v2h-2v-2zm5-14a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V4zm4 0h-2v12h2V4zm0 14h-2v2h2v-2z' fill='#000' />
  </StyledIcon>
  ));
