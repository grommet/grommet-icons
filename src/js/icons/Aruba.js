import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Aruba = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Aruba" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.11 17.3016C9.03598 17.3016 6.50849 14.8424 6.50849 11.8367C6.50849 8.83105 9.03598 6.37187 12.11 6.37187C15.1839 6.37187 17.7114 8.83105 17.7114 11.8367C17.7114 14.8424 15.1839 17.3016 12.11 17.3016ZM12.11 2C6.50849 2 2 6.44018 2 11.8367C2 17.3016 6.50849 21.6734 12.11 21.6734C14.4325 21.6734 16.5501 20.922 18.2579 19.6241C19.2826 21.3319 22.2199 21.6734 22.2199 21.6734V11.8367C22.2199 6.44018 17.7114 2 12.11 2Z" fill="#FF8300"/>
  </StyledIcon>
));

Aruba.displayName = 'Aruba';
export { Aruba };
