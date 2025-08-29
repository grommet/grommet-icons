import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Left = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Left" {...props}>
    <path
      d="M16.293 1.29302C16.6835 0.902491 17.3166 0.902491 17.7071 1.29302C18.0975 1.68355 18.0976 2.31658 17.7071 2.70708L8.41411 12L17.7071 21.293C18.0975 21.6835 18.0976 22.3166 17.7071 22.7071C17.3166 23.0976 16.6835 23.0975 16.293 22.7071L6.29302 12.7071C5.90249 12.3166 5.90249 11.6835 6.29302 11.293L16.293 1.29302Z"
      fill="#000"
    />
  </StyledIcon>
));

Left.displayName = 'Left';
export { Left };
