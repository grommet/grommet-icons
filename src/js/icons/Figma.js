import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Figma = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Figma" {...props}>
    <path
      fill="#0ACF83"
      d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4Z"
    />
    <path
      fill="#A259FF"
      d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4Z"
    />
    <path
      fill="#F24E1E"
      d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4Z"
    />
    <path fill="#FF7262" d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0Z" />
    <path
      fill="#1ABCFE"
      d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4Z"
    />
  </StyledIcon>
));

Figma.displayName = 'Figma';

export { Figma };
