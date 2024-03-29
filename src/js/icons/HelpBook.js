import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const HelpBook = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="HelpBook" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M11.937 12.136v-.864c0-.864 0-1.296.797-1.728.798-.432 1.595-.864 1.595-2.16 0-.865-.797-2.16-2.392-2.16-1.594 0-2.391 1.092-2.391 2.592" /><path stroke="#000" strokeWidth="2" d="M11.938 13v1.728" /><path fill="none" stroke="#000" strokeWidth="2" d="M5.5 18a2.5 2.5 0 1 0 0 5H22M3 20.5v-17A2.5 2.5 0 0 1 5.5 1H21v17.007H5.492M20.5 18a2.5 2.5 0 1 0 0 5" />
  </StyledIcon>
));

HelpBook.displayName = 'HelpBook';

export { HelpBook };
