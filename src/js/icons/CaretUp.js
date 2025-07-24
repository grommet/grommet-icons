import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const CaretUp = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="CaretUp" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5304 6.65524C11.3159 6.0146 12.4749 6.06075 13.2071 6.79293L20.7931 14.3789C22.0526 15.6387 21.1605 17.7927 19.379 17.7929H4.20712C2.42539 17.7929 1.53328 15.6388 2.79305 14.3789L10.379 6.79293L10.5304 6.65524ZM4.20712 15.7929H19.379L11.7931 8.20699L4.20712 15.7929Z"
      fill="#000"
    />
  </StyledIcon>
));

CaretUp.displayName = 'CaretUp';
export { CaretUp };
