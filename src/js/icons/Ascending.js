import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Ascending = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Ascending" {...props}>
    <path
      d="M17.507 8.09277C17.8973 8.48326 17.8973 9.11634 17.507 9.50684C17.1165 9.89721 16.4834 9.89718 16.0929 9.50684L13.0001 6.41406V20C13.0001 20.5522 12.5523 20.9998 12.0001 21C11.448 20.9998 11.0001 20.5522 11.0001 20V6.41406L7.90734 9.50684C7.51687 9.89732 6.88382 9.89721 6.49328 9.50684C6.10286 9.11631 6.10279 8.48327 6.49328 8.09277L12.0001 2.58594L17.507 8.09277Z"
      fill="#000"
    />
  </StyledIcon>
));

Ascending.displayName = 'Ascending';
export { Ascending };
