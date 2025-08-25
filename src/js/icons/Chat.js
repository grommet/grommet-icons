import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Chat = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Chat" {...props}>
    <path d="M17 11C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H10C9.44772 13 9 12.5523 9 12C9 11.4477 9.44772 11 10 11H17Z" fill="#555555"/>
<path d="M17 7C17.5523 7 18 7.44772 18 8C18 8.55228 17.5523 9 17 9H6C5.44772 9 5 8.55228 5 8C5 7.44772 5.44772 7 6 7H17Z" fill="#555555"/>
<path fillRule="evenodd" clipRule="evenodd" d="M18 1C20.7614 1 23 3.23858 23 6V24.0811L16.6484 19H6C3.23858 19 1 16.7614 1 14V6C1 3.23858 3.23858 1 6 1H18ZM6 3C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H17.3506L17.625 17.2188L21 19.918V6C21 4.34315 19.6569 3 18 3H6Z" fill="#555555"/>
  </StyledIcon>
));

Chat.displayName = 'Chat';
export { Chat };
