import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Chrome = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Chrome" {...props}>
    <g fill="none" fillRule="evenodd"><path fill="#4285F4" d="M11.973 16.414A4.32 4.32 0 0 1 7.66 12.1a4.32 4.32 0 0 1 4.314-4.315 4.32 4.32 0 0 1 4.315 4.315 4.32 4.32 0 0 1-4.315 4.314z" /><path fill="#4AAE48" d="M13.791 17.181a5.507 5.507 0 0 1-5.38-.926 5.496 5.496 0 0 1-1.718-2.505l-.002-.006L1.936 5.51A11.892 11.892 0 0 0 .23 14.35a11.896 11.896 0 0 0 5.08 7.627 11.894 11.894 0 0 0 4.557 1.84l3.924-6.635z" /><path fill="#EA3939" d="M22.76 6.707a12.08 12.08 0 0 0-20.185-2.25l4.016 6.956a5.393 5.393 0 0 1 5.274-4.706H22.76z" /><path fill="#FED14B" d="M11.926 24c3.01 0 5.891-1.129 8.11-3.178a11.932 11.932 0 0 0 3.816-7.893 12.05 12.05 0 0 0-.744-5.144h-7.856a5.506 5.506 0 0 1 2.09 4.34 5.529 5.529 0 0 1-1.182 3.381l-5.008 8.47c.258.016.518.024.774.024z" /></g>
  </StyledIcon>
));

Chrome.displayName = 'Chrome';

export { Chrome };
