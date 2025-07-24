import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const RadialSelected = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="RadialSelected" {...props}>
    <path d="M12 6.45361C15.3137 6.45361 18 9.1399 18 12.4536C18 15.7673 15.3137 18.4536 12 18.4536C8.68629 18.4536 6 15.7673 6 12.4536C6 9.1399 8.68629 6.45361 12 6.45361Z" fill="#555555"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 0.453613C18.6274 0.453613 24 5.8262 24 12.4536C24 19.081 18.6274 24.4536 12 24.4536C5.37258 24.4536 0 19.081 0 12.4536C0 5.8262 5.37258 0.453613 12 0.453613ZM12 2.45361C6.47715 2.45361 2 6.93077 2 12.4536C2 17.9765 6.47715 22.4536 12 22.4536C17.5228 22.4536 22 17.9765 22 12.4536C22 6.93077 17.5228 2.45361 12 2.45361Z" fill="#555555"/>
  </StyledIcon>
));

RadialSelected.displayName = 'RadialSelected';
export { RadialSelected };
