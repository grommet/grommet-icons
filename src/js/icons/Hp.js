import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Hp = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Hp" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.42103 0.000152588L5 15.127H7.13819L10.5591 0.000152588H8.42103ZM17.4143 8.87313L15.9177 15.098H18.0557L19.5523 8.87313H17.4143ZM13.7795 8.87313L10.3586 24H12.4966L15.9177 8.87313H13.7795ZM10.1316 8.87313L8.63479 15.098H10.7728L12.2694 8.87313H10.1316Z"
      fill="#333333"
    />
  </StyledIcon>
));

Hp.displayName = 'Hp';
export { Hp };
