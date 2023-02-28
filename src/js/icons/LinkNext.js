import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useScaleProps } from '../utils';

const LinkNext = forwardRef((props, ref) => {
  const scaleProps = useScaleProps(props);
  return (
    <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="LinkNext" {...props}>
      <path
        fill="none"
        stroke="#000"
        strokeWidth="2"
        d="M2 12h20m-9-9 9 9-9 9"
        {...scaleProps}
      />
    </StyledIcon>
  );
});

LinkNext.displayName = 'LinkNext';

export { LinkNext };
