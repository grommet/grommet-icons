import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Add = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Add" {...props}>
    <path d="M12 1C12.5523 1 13 1.44772 13 2V11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H11V2C11 1.44772 11.4477 1 12 1Z" fill="#555555"/>
  </StyledIcon>
));

Add.displayName = 'Add';
export { Add };
