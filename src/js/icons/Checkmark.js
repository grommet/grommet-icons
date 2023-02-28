import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useScaleProps } from '../utils';

const Checkmark = forwardRef((props, ref) => {
  const scaleProps = useScaleProps(props);
  return (
    <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Checkmark" {...props}>
      <path
        fill="none"
        stroke="#000"
        strokeWidth="2"
        d="m2 14 7 6L22 4"
        {...scaleProps}
      />
    </StyledIcon>
  );
});

Checkmark.displayName = 'Checkmark';

export { Checkmark };
