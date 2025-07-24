function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Navigate = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Navigate"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1.70996C12.5523 1.70997 13 2.15768 13 2.70996V6.70996H20C20.3344 6.70996 20.6466 6.87708 20.8321 7.15527L22.8321 10.1553C23.056 10.4912 23.056 10.9288 22.8321 11.2646L20.8321 14.2646C20.6466 14.5428 20.3344 14.71 20 14.71H13V22.71H11V11.71H4.00004C3.66569 11.71 3.35348 11.5428 3.16801 11.2646L1.16801 8.26465C0.944078 7.92875 0.944078 7.49117 1.16801 7.15527L3.16801 4.15527L3.24321 4.05664C3.43179 3.83813 3.70737 3.70996 4.00004 3.70996H11V2.70996C11 2.15768 11.4478 1.70996 12 1.70996ZM13 12.71H19.4649L20.7979 10.71L19.4649 8.70996H13V12.71ZM3.20121 7.70996L4.5352 9.70996H11V5.70996H4.5352L3.20121 7.70996Z",
    fill: "#000"
  }));
});
Navigate.displayName = 'Navigate';
export { Navigate };