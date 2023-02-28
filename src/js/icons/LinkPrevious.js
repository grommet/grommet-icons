import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useScaleProps } from '../utils';

const LinkPrevious = forwardRef((props, ref) => {
  const scaleProps = useScaleProps(props);
  return (
    <StyledIcon
      ref={ref}
      viewBox="0 0 24 24"
      a11yTitle="LinkPrevious"
      {...props}
    >
      <path
        fill="none"
        stroke="#000"
        strokeWidth="2"
        d="M22 12H2m9-9-9 9 9 9"
        {...scaleProps}
      />
    </StyledIcon>
  );
});

LinkPrevious.displayName = 'LinkPrevious';

export { LinkPrevious };
