import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useScaleProps } from '../utils';

const Add = forwardRef((props, ref) => {
  const scaleProps = useScaleProps(props);
  return (
    <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Add" {...props}>
      <path
        fill="none"
        stroke="#000"
        strokeWidth="2"
        d="M12 22V2M2 12h20"
        {...scaleProps}
      />
    </StyledIcon>
  );
});

Add.displayName = 'Add';

export { Add };
