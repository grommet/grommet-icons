import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useScaleProps } from '../utils';

const Search = forwardRef((props, ref) => {
  const scaleProps = useScaleProps(props);
  return (
    <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Search" {...props}>
      <path
        fill="none"
        stroke="#000"
        strokeWidth="2"
        d="m15 15 7 7-7-7zm-5.5 2a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z"
        {...scaleProps}
      />
    </StyledIcon>
  );
});

Search.displayName = 'Search';

export { Search };
