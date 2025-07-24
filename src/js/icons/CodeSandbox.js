import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const CodeSandbox = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="CodeSandbox" {...props}>
    <path fill="none" stroke="#444" strokeWidth="2" d="M12,1.5 L3,6.5 L3,17.5 L12,22.5 L21,17.5 L21,6.5 L12,1.5 Z M12,22.5 L12,11.5 M21,6.5 L12,11.5 M12,11.5 L3,6.5 M21,17.5 L21,12 L16.5,14.5 L16.5,20 L21,17.5 Z M3,17.5 L3,12 L7.5,14.5 L7.5,20 L3,17.5 Z M12,1.5 L7.5,4 L12,6.5 L16.5,4 L12,1.5 Z"/>
  </StyledIcon>
));

CodeSandbox.displayName = 'CodeSandbox';
export { CodeSandbox };
