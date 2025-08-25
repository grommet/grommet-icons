import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Notification = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Notification" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 1C16.9703 1 21 5.02974 21 10V18H22C22.5523 18 23 18.4477 23 19C23 19.5523 22.5523 20 22 20H15C15 21.6568 13.6568 23 12 23C10.3432 23 9.00004 21.6568 9 20H2C1.44772 20 1 19.5523 1 19C1.00003 18.4477 1.44774 18 2 18H3V10C3.00003 5.02974 7.02974 1 12 1ZM11 20C11 20.5522 11.4477 21 12 21C12.5523 21 13 20.5522 13 20H11ZM12 3C8.13431 3 5.00003 6.13431 5 10V18H19V10C19 6.13431 15.8657 3 12 3Z" fill="#555555"/>
  </StyledIcon>
));

Notification.displayName = 'Notification';
export { Notification };
