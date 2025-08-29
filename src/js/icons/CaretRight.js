import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const CaretRight = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="CaretRight" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 4.41414C6.00004 2.63238 8.15414 1.7402 9.41406 3.00008L17 10.586C17.7809 11.3671 17.781 12.6331 17 13.4141L9.41406 21.0001C8.15418 22.2598 6.00021 21.3676 6 19.586V4.41414ZM8 19.586L15.5859 12.0001L8 4.41414V19.586Z"
      fill="#000"
    />
  </StyledIcon>
));

CaretRight.displayName = 'CaretRight';
export { CaretRight };
