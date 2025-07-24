import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const DisabledOutline = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DisabledOutline" {...props}>
    <path d="M17 11.4536C17.5523 11.4536 18 11.9013 18 12.4536C18 13.0059 17.5523 13.4536 17 13.4536H7C6.44772 13.4536 6 13.0059 6 12.4536C6 11.9013 6.44772 11.4536 7 11.4536H17Z" fill="#555555"/>
<path fillRule="evenodd" clipRule="evenodd" d="M18 1.45361C20.7614 1.45361 23 3.69219 23 6.45361V18.4536C23 21.215 20.7614 23.4536 18 23.4536H6C3.23858 23.4536 1 21.215 1 18.4536V6.45361C1 3.69219 3.23858 1.45361 6 1.45361H18ZM6 3.45361C4.34315 3.45361 3 4.79676 3 6.45361V18.4536C3 20.1105 4.34315 21.4536 6 21.4536H18C19.6569 21.4536 21 20.1105 21 18.4536V6.45361C21 4.79676 19.6569 3.45361 18 3.45361H6Z" fill="#555555"/>
  </StyledIcon>
));

DisabledOutline.displayName = 'DisabledOutline';
export { DisabledOutline };
