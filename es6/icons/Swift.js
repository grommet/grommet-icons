function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Swift = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Swift"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#D15F3E",
    fillRule: "evenodd",
    d: "M18.103 21.018c-2.827 1.633-6.714 1.801-10.625.125-3.166-1.347-5.794-3.705-7.478-6.4.808.674 1.752 1.213 2.762 1.684 4.039 1.893 8.077 1.764 10.918.005l-.004-.005C9.634 13.328 6.198 9.286 3.638 5.985c-.54-.539-.943-1.212-1.348-1.819 3.1 2.83 8.018 6.4 9.769 7.411C8.354 7.67 5.053 2.82 5.187 2.954c5.861 5.928 11.319 9.297 11.319 9.297.18.101.32.186.432.262.118-.3.221-.612.308-.936.944-3.436-.134-7.343-2.492-10.577 5.456 3.301 8.69 9.499 7.343 14.686-.035.14-.074.279-.115.414l.048.058c2.694 3.369 1.953 6.94 1.616 6.266-1.461-2.86-4.167-1.986-5.543-1.406z"
  }));
});
Swift.displayName = 'Swift';
export { Swift };