import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const StopCircle = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="StopCircle" {...props}>
    <path d="M15 8C15.5523 8 16 8.44772 16 9V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15V9C8 8.44772 8.44772 8 9 8H15Z" fill="#555555"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" fill="#555555"/>
  </StyledIcon>
));

StopCircle.displayName = 'StopCircle';
export { StopCircle };
