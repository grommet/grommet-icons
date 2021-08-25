import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Figma = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Figma" {...props}>
    <g fill="none" fillRule="evenodd" transform="translate(4)"><circle cx="12" cy="12" r="4" fill="#19BCFE" /><path fill="#09CF83" d="M4 24a4 4 0 0 0 4-4v-4H4a4 4 0 1 0 0 8z" /><path fill="#A259FF" d="M4 16h4V8H4a4 4 0 1 0 0 8z" /><path fill="#F24E1E" d="M4 8h4V0H4a4 4 0 1 0 0 8z" /><path fill="#FF7262" d="M12 8H8V0h4a4 4 0 1 1 0 8z" /></g>
  </StyledIcon>
));

Figma.displayName = 'Figma';

export { Figma };
