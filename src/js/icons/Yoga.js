import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Yoga = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Yoga" {...props}>
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m12 11-1 3 1 3h-1.5L9 14l.5-4.5L12 11zm1-9L9 6v8l1 3H6l-3 5m17.5 0-5-3.5L12 17l-1-3 1-3 3.5 2v5.5M14 8.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 2L10 17v-3.5l1-3z"
    />
  </StyledIcon>
));

Yoga.displayName = 'Yoga';

export { Yoga };
