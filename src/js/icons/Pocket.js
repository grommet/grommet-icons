import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Pocket = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Pocket" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 2C23.1046 2 24 2.89543 24 4V12C24 17.9821 18 23 12 23C6 23 0 17.9821 0 12V4C0 2.89543 0.89543 2 2 2H22ZM6.9082 7.80664C6.30371 7.34544 5.43632 7.40781 4.90527 7.97461C4.3743 8.54148 4.36847 9.41122 4.86816 9.98438L4.97461 10.0947L11.3789 16.0947C11.6695 16.3668 12.0562 16.5123 12.4541 16.499C12.8522 16.4856 13.2292 16.3147 13.501 16.0234L19.0967 10.0234C19.6616 9.41772 19.629 8.46839 19.0234 7.90332C18.4177 7.33839 17.4684 7.37105 16.9033 7.97656L12.332 12.877L7.02539 7.90527L6.9082 7.80664Z"
      fill="#F50057"
    />
  </StyledIcon>
));

Pocket.displayName = 'Pocket';
export { Pocket };
