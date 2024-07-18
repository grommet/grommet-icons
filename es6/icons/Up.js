function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
import { useScaleProps } from '../utils';
var Up = /*#__PURE__*/forwardRef(function (props, ref) {
  var scaleProps = useScaleProps(props);
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Up"
  }, props), /*#__PURE__*/React.createElement("path", _extends({
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m2 15.999 10.173-9.824 9.824 10.173"
  }, scaleProps)));
});
Up.displayName = 'Up';
export { Up };