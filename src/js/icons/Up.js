import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Up = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Up" {...props}>
    <path
      d="M11.3692 6.22486C11.762 5.90451 12.341 5.92711 12.7071 6.29322L22.7071 16.2932C23.0975 16.6838 23.0976 17.3168 22.7071 17.7073C22.3166 18.0977 21.6835 18.0976 21.293 17.7073L12.0001 8.41432L2.7071 17.7073C2.31662 18.0977 1.68355 18.0976 1.29304 17.7073C0.902539 17.3168 0.90259 16.6838 1.29304 16.2932L11.293 6.29322L11.3692 6.22486Z"
      fill="#000"
    />
  </StyledIcon>
));

Up.displayName = 'Up';
export { Up };
