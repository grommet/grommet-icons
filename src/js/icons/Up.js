import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useScaleProps } from '../utils';

const Up = forwardRef((props, ref) => {
  const scaleProps = useScaleProps(props);
  return (
    <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Up" {...props}>
      <path
        fill="none"
        stroke="#000"
        strokeWidth="2"
        d="m2 15.999 10.173-9.824 9.824 10.173"
        {...scaleProps}
      />
    </StyledIcon>
  );
});

Up.displayName = 'Up';

export { Up };
