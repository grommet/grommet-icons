function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
import { useScaleProps } from '../utils';
var Close = /*#__PURE__*/forwardRef(function (props, ref) {
  var scaleProps = useScaleProps(props);
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Close"
  }, props), /*#__PURE__*/React.createElement("path", _extends({
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m3 3 18 18M3 21 21 3"
  }, scaleProps)));
});
Close.displayName = 'Close';
export { Close };