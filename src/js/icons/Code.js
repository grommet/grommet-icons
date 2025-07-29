import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Code = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Code" {...props}>
    <path
      d="M15.958 2.28711L9.95801 22.2871L8.04199 21.7129L14.042 1.71289L15.958 2.28711Z"
      fill="#000"
    />
    <path
      d="M7.70703 7.70703L3.41406 12L7.70703 16.293L6.29297 17.707L0.585938 12L6.29297 6.29297L7.70703 7.70703Z"
      fill="#000"
    />
    <path
      d="M23.4141 12L17.707 17.707L16.293 16.293L20.5859 12L16.293 7.70703L17.707 6.29297L23.4141 12Z"
      fill="#000"
    />
  </StyledIcon>
));

Code.displayName = 'Code';
export { Code };
