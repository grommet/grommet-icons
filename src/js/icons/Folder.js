import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Folder = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Folder" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 2C9.94427 2 10.8338 2.44478 11.4004 3.2002L13.2002 5.59961C13.389 5.85141 13.6852 6 14 6H20C21.6569 6 23 7.34315 23 9V19C23 20.6569 21.6569 22 20 22H4C2.34315 22 1 20.6569 1 19V5C1 3.34315 2.34315 2 4 2H9ZM4 4C3.44772 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19V9C21 8.44772 20.5523 8 20 8H14C13.0557 8 12.1662 7.55522 11.5996 6.7998L9.7998 4.40039C9.61095 4.14859 9.31476 4 9 4H4Z"
      fill="#000"
    />
  </StyledIcon>
));

Folder.displayName = 'Folder';
export { Folder };
