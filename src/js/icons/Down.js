import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useScaleProps } from '../utils';

const Down = forwardRef((props, ref) => {
  const scaleProps = useScaleProps(props);
  return (
    <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Down" {...props}>
      <path
        fill="none"
        stroke="#000"
        strokeWidth="2"
        d="m2 8.35 10.173 9.823L21.997 8"
        {...scaleProps}
      />
    </StyledIcon>
  );
});

Down.displayName = 'Down';

export { Down };
