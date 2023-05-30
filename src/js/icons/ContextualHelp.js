import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const ContextualHelp = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="ContextualHelp" {...props}>
    <path fill="none" stroke="#000" d="M11.178 10.818v-.727c0-.727 0-1.091.714-1.455.714-.363 1.428-.727 1.428-1.818 0-.727-.714-1.818-2.142-1.818s-2.142.92-2.142 2.182" /><path stroke="#000" d="M11.178 11.546V13" /><path fill="none" stroke="#000" d="M5.5 18a2.5 2.5 0 1 0 0 5H22M3 20.5v-17A2.5 2.5 0 0 1 5.5 1H21v17.007H5.492M20.5 18a2.5 2.5 0 1 0 0 5" />
  </StyledIcon>
));

ContextualHelp.displayName = 'ContextualHelp';

export { ContextualHelp };
