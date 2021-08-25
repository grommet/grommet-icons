import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const UnorderedList = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="UnorderedList" {...props}>
    <path d="M5.94 6.42H24v1.75H5.94zm0 5.29H24v1.75H5.94zm0 5.28H24v1.75H5.94z" /><circle cx="1.85" cy="7.29" r="1.52" /><circle cx="1.85" cy="12.58" r="1.52" /><circle cx="1.85" cy="17.87" r="1.52" />
  </StyledIcon>
));

UnorderedList.displayName = 'UnorderedList';

export { UnorderedList };
