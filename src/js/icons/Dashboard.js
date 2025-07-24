import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Dashboard = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Dashboard" {...props}>
    <path d="M15 16.2769C15 14.62 13.6569 13.2769 12 13.2769M12 13.2769C10.3431 13.2769 9 14.62 9 16.2769M12 13.2769V8.75289M5 5.27686L7 7.27686M12 3.27686V5.27686M19 12.2769H21M3 12.2769H5M17 7.27686L19 5.27686M3.4191 17.2769H20.6145M12 22.2769C17.5228 22.2769 22 17.7997 22 12.2769C22 6.75401 17.5228 2.27686 12 2.27686C6.47715 2.27686 2 6.75401 2 12.2769C2 17.7997 6.47715 22.2769 12 22.2769Z" stroke="#555555" strokeWidth="2" strokeLinecap="round"/>
  </StyledIcon>
));

Dashboard.displayName = 'Dashboard';
export { Dashboard };
