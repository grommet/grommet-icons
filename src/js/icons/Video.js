import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Video = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Video" {...props}>
    <path
      d="M7.5 8C8.05228 8 8.5 8.44772 8.5 9C8.5 9.55228 8.05228 10 7.5 10H6C5.44772 10 5 9.55228 5 9C5 8.44772 5.44772 8 6 8H7.5Z"
      fill="#000"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 4C15.6569 4 17 5.34315 17 7V8.38184L21.5527 6.10547L21.6719 6.05566C21.9539 5.95764 22.2676 5.99015 22.5254 6.14941C22.8202 6.33162 23 6.65342 23 7V17C23 17.3466 22.8202 17.6684 22.5254 17.8506C22.2306 18.0327 21.8626 18.0495 21.5527 17.8945L17 15.6182V17C17 18.6569 15.6569 20 14 20H4C2.34315 20 1 18.6569 1 17V7C1 5.34315 2.34315 4 4 4H14ZM4 6C3.44772 6 3 6.44772 3 7V17C3 17.5523 3.44772 18 4 18H14C14.5523 18 15 17.5523 15 17V7C15 6.44772 14.5523 6 14 6H4ZM17 10.6182V13.3818L21 15.3818V8.61816L17 10.6182Z"
      fill="#000"
    />
  </StyledIcon>
));

Video.displayName = 'Video';
export { Video };
