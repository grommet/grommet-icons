import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Facebook = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Facebook" {...props}>
    <path
      d="M12 0C5.373 0 0 5.373 0 12C0 18.016 4.432 22.984 10.207 23.852V15.18H7.237V12.025H10.207V9.927C10.207 6.452 11.9 4.927 14.787 4.927C16.171 4.927 16.902 5.029 17.249 5.076V7.829H15.279C14.053 7.829 13.624 8.992 13.624 10.302V12.026H17.218L16.73 15.181H13.624V23.877C19.481 23.083 24 18.075 24 12C24 5.373 18.627 0 12 0Z"
      fill="#1089FB"
    />
  </StyledIcon>
));

Facebook.displayName = 'Facebook';
export { Facebook };
