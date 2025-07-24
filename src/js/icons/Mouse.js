import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Mouse = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Mouse" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M15 1.27686C17.7614 1.27686 20 3.51543 20 6.27686V15.2769C20 19.6951 16.4183 23.2769 12 23.2769C7.58172 23.2769 4 19.6951 4 15.2769V6.27686C4 3.51543 6.23858 1.27686 9 1.27686H15ZM6 15.2769C6 18.5906 8.68629 21.2769 12 21.2769C15.3137 21.2769 18 18.5906 18 15.2769V11.2769H6V15.2769ZM9 3.27686C7.34315 3.27686 6 4.62 6 6.27686V9.27686H11V3.27686H9ZM13 9.27686H18V6.27686C18 4.62 16.6569 3.27686 15 3.27686H13V9.27686Z" fill="#555555"/>
  </StyledIcon>
));

Mouse.displayName = 'Mouse';
export { Mouse };
