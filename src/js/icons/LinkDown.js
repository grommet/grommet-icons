import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useScaleProps } from '../utils';

const LinkDown = forwardRef((props, ref) => {
  const scaleProps = useScaleProps(props);
  return (
    <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="LinkDown" {...props}>
      <path
        fill="none"
        stroke="#000"
        strokeWidth="2"
        d="M12 22V2M3 13l9 9 9-9"
        {...scaleProps}
      />
    </StyledIcon>
  );
});

LinkDown.displayName = 'LinkDown';

export { LinkDown };
