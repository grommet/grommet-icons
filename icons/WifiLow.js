"use strict";

exports.__esModule = true;
exports.WifiLow = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var WifiLow = exports.WifiLow = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "WifiLow"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    opacity: "0.3"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4.2218 10.222C8.51758 5.92633 15.4827 5.92626 19.7784 10.222C20.1687 10.6124 20.1686 11.2456 19.7784 11.6361C19.3879 12.0265 18.7539 12.0265 18.3634 11.6361C14.8487 8.12175 9.15047 8.12157 5.63587 11.6361C5.24535 12.0265 4.61231 12.0265 4.2218 11.6361C3.83141 11.2455 3.83137 10.6125 4.2218 10.222Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1.39368 7.39387C7.25153 1.53602 16.7487 1.53604 22.6066 7.39387C22.9968 7.78442 22.997 8.41751 22.6066 8.80793C22.2161 9.19818 21.583 9.19809 21.1925 8.80793C16.1157 3.73115 7.88454 3.73113 2.80774 8.80793C2.41733 9.19825 1.7842 9.19808 1.39368 8.80793C1.00318 8.41743 1.00324 7.7844 1.39368 7.39387Z",
    fill: "#000"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.0001 15C13.6569 15 15 16.3432 15.0001 18C15.0001 19.6569 13.6569 21 12.0001 21C10.3432 21 9.00006 19.6569 9.00006 18C9.00008 16.3432 10.3432 15 12.0001 15ZM12.0001 17C11.4478 17 11.0001 17.4478 11.0001 18C11.0001 18.5523 11.4478 19 12.0001 19C12.5523 19 13.0001 18.5523 13.0001 18C13 17.4478 12.5523 17 12.0001 17Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.04987 13.0498C9.78336 10.3166 14.2157 10.3168 16.9493 13.0498C17.3398 13.4404 17.3398 14.0743 16.9493 14.4649C16.5588 14.855 15.9257 14.855 15.5352 14.4649C13.5826 12.5126 10.4164 12.5124 8.46393 14.4649C8.07345 14.855 7.4403 14.8551 7.04987 14.4649C6.65973 14.0744 6.65957 13.4402 7.04987 13.0498Z",
    fill: "#000"
  }));
});
WifiLow.displayName = 'WifiLow';