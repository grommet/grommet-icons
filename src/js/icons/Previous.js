import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useScaleProps } from '../utils';

const Previous = forwardRef((props, ref) => {
  const scaleProps = useScaleProps(props);
  return (
    <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Previous" {...props}>
      <path
        fill="none"
        stroke="#000"
        strokeWidth="2"
        d="M17 2 7 12l10 10"
        {...scaleProps}
      />
    </StyledIcon>
  );
});

Previous.displayName = 'Previous';

export { Previous };
