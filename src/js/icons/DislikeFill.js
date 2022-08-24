import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const DislikeFill = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Dislike" {...props}>
    <path
      fill="#000"
      fillRule="evenodd"
      d="M13 24h.997l.003-.997L13 23l1 .003v-.261l.002-.698.006-2.207c.004-1.665.008-3.498.008-4.163 0-.42.155-.83.454-1.132.287-.291.767-.542 1.53-.542h6.999L23 13v1h1V0h-1v1-1H4C2.846 0 1.797.29 1.043 1.043.289 1.797 0 2.846 0 4v9.999L1 14H0v1h7v5c0 1.154.29 2.203 1.043 2.957C8.797 23.711 9.846 24 11 24h2Zm6-12V2h3v10h-3Z"
      clipRule="evenodd"
    />
  </StyledIcon>
));

DislikeFill.displayName = 'DislikeFill';

export { DislikeFill };
