import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Right = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Right" {...props}>
    <path d="M6.29302 1.29302C6.68354 0.902491 7.31655 0.902491 7.70708 1.29302L17.7071 11.293C18.0975 11.6835 18.0976 12.3166 17.7071 12.7071L7.70708 22.7071C7.31658 23.0976 6.68355 23.0975 6.29302 22.7071C5.90249 22.3166 5.90249 21.6835 6.29302 21.293L15.586 12L6.29302 2.70708C5.90249 2.31655 5.90249 1.68354 6.29302 1.29302Z" fill="#555555"/>
  </StyledIcon>
));

Right.displayName = 'Right';
export { Right };
