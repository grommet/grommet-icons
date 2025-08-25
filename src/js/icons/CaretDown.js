import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const CaretDown = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="CaretDown" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M19.7932 6.20703C21.5747 6.20725 22.4668 8.3612 21.2072 9.62109L13.6213 17.207C12.8403 17.988 11.5742 17.9879 10.7932 17.207L3.20723 9.62109C1.94742 8.36116 2.83955 6.20707 4.62129 6.20703H19.7932ZM12.2072 15.793L19.7932 8.20703H4.62129L12.2072 15.793Z" fill="#555555"/>
  </StyledIcon>
));

CaretDown.displayName = 'CaretDown';
export { CaretDown };
