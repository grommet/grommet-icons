import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const ContextualHelp = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="ContextualHelp" {...props}>
    <path
      fill="none"
      d="M11.1778 10.8182V10.0909C11.1778 9.36364 11.1778 9 11.8918 8.63636C12.6059 8.27273 13.3199 7.90909 13.3199 6.81818C13.3199 6.09091 12.6059 5 11.1778 5C9.74969 5 9.03564 5.91937 9.03564 7.18182"
      stroke="#000"
      strokeWidth="2"
    />
    <path d="M11.1784 11.5459V13.0004" stroke="#000" strokeWidth="2" />
    <path fill="none" stroke="#000" strokeWidth="2" d="M5.5,18 C4.11928813,18 3,19.1192881 3,20.5 C3,21.8807119 4.11928813,23 5.5,23 L22,23 M3,20.5 L3,3.5 C3,2.11928813 4.11928813,1 5.5,1 L21,1 L21,18.0073514 L5.49217286,18.0073514 M20.5,18 C19.1192881,18 18,19.1192881 18,20.5 C18,21.8807119 19.1192881,23 20.5,23 L20.5,23"/>
  </StyledIcon>
));

ContextualHelp.displayName = 'ContextualHelp';

export { ContextualHelp };
