import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Zoom = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Zoom" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 0C20.4183 0 24 3.58172 24 8V16C24 20.4183 20.4183 24 16 24H8C3.58172 24 0 20.4183 0 16V8C0 3.58172 3.58172 0 8 0H16ZM6 8C5.44772 8 5 8.44772 5 9V13C5 14.6569 6.34315 16 8 16H14C14.5523 16 15 15.5523 15 15V11C15 9.34315 13.6569 8 12 8H6ZM19 8.99609C19 8.30366 18.1416 7.98099 17.6855 8.50195L15.9951 10.4346C15.6761 10.7992 15.5 11.2676 15.5 11.752V12.249C15.5001 12.7333 15.6762 13.2009 15.9951 13.5654L17.6855 15.498C18.1416 16.0191 19 15.6964 19 15.0039V8.99609Z"
      fill="#3984FD"
    />
  </StyledIcon>
));

Zoom.displayName = 'Zoom';
export { Zoom };
