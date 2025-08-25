import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Shop = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Shop" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 1C14.7614 1 17 3.23858 17 6V7H22C22.5523 7 23 7.44772 23 8V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V8C1 7.44772 1.44772 7 2 7H7V6C7 3.23858 9.23858 1 12 1ZM3 19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V9H3V19ZM12 3C10.3431 3 9 4.34315 9 6V7H15V6C15 4.34315 13.6569 3 12 3Z" fill="#555555"/>
  </StyledIcon>
));

Shop.displayName = 'Shop';
export { Shop };
