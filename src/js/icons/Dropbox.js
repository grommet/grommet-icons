import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Dropbox = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Dropbox" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M7.0599 1L0.00015 5.6095L4.8819 9.5185L12.0001 5.1235L7.0599 1ZM0 13.4281L7.05975 18.0376L12 13.9141L4.8819 9.5185L0 13.4281ZM12 13.9141L16.9401 18.0377L23.9998 13.4282L19.1181 9.51842L12 13.9141ZM24 5.60957L16.9403 1.00007L12.0001 5.1235L19.1181 9.51842L24 5.60957ZM12.0145 14.8013L7.05998 18.9128L4.93972 17.5283V19.08L12.0145 23.3228L19.0892 19.08V17.5283L16.969 18.9128L12.0145 14.8013Z" fill="#007EE5"/>
  </StyledIcon>
));

Dropbox.displayName = 'Dropbox';
export { Dropbox };
