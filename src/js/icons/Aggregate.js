import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Aggregate = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Aggregate" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M8 0C12.4183 0 16 3.58172 16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM16 14C16 15.1046 15.1046 16 14 16H10C10 19.3137 12.6863 22 16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10V14ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14V10C8 8.89543 8.89543 8 10 8H14C14 4.68629 11.3137 2 8 2ZM10 14H14V10H10V14Z" fill="#555555"/>
  </StyledIcon>
));

Aggregate.displayName = 'Aggregate';
export { Aggregate };
