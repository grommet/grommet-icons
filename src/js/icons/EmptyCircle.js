import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const EmptyCircle = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="EmptyCircle" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 1.45361C18.0751 1.45361 23 6.37848 23 12.4536C23 18.5287 18.0751 23.4536 12 23.4536C5.92487 23.4536 1 18.5287 1 12.4536C1 6.37848 5.92487 1.45361 12 1.45361ZM12 3.45361C7.02944 3.45361 3 7.48305 3 12.4536C3 17.4242 7.02944 21.4536 12 21.4536C16.9706 21.4536 21 17.4242 21 12.4536C21 7.48305 16.9706 3.45361 12 3.45361Z" fill="#555555"/>
  </StyledIcon>
));

EmptyCircle.displayName = 'EmptyCircle';
export { EmptyCircle };
