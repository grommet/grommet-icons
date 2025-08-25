import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Bookmark = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Bookmark" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M17 1C18.6569 1 20 2.34315 20 4V20.0566C20 21.6832 18.1616 22.6296 16.8379 21.6846L12 18.2285L7.16211 21.6846C5.8384 22.6296 4 21.6832 4 20.0566V4C4 2.34315 5.34315 1 7 1H17ZM7 3C6.44772 3 6 3.44772 6 4V20.0566L10.8379 16.6016C11.5332 16.105 12.4668 16.105 13.1621 16.6016L18 20.0566V4C18 3.44772 17.5523 3 17 3H7Z" fill="#555555"/>
  </StyledIcon>
));

Bookmark.displayName = 'Bookmark';
export { Bookmark };
