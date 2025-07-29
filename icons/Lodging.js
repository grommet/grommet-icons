"use strict";

exports.__esModule = true;
exports.Lodging = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Lodging = exports.Lodging = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Lodging"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.5 2C21.1569 2 22.5 3.34315 22.5 5V12C22.5 12.0985 22.4845 12.1933 22.458 12.2832C22.7985 12.7698 23 13.361 23 14V19C23 20.1046 22.1046 21 21 21V22C21 22.5523 20.5523 23 20 23C19.4477 23 19 22.5523 19 22V21H5V22C5 22.5523 4.55228 23 4 23C3.44772 23 3 22.5523 3 22V21C1.89543 21 1 20.1046 1 19V14C1 13.361 1.20148 12.7698 1.54199 12.2832C1.51546 12.1933 1.5 12.0985 1.5 12V5C1.5 3.34315 2.84315 2 4.5 2H19.5ZM3 19H21V18H3V19ZM4 13C3.44772 13 3 13.4477 3 14V16H21V14C21 13.4477 20.5523 13 20 13H4ZM4.5 4C3.94772 4 3.5 4.44772 3.5 5V11.041C3.66258 11.0137 3.82967 11 4 11V10C4 8.89543 4.89543 8 6 8H10C11.1046 8 12 8.89543 12 10C12 8.89543 12.8954 8 14 8H18C19.1046 8 20 8.89543 20 10V11C20.1703 11 20.3374 11.0137 20.5 11.041V5C20.5 4.44772 20.0523 4 19.5 4H4.5ZM6 11H10V10H6V11ZM14 11H18V10H14V11Z",
    fill: "#000"
  }));
});
Lodging.displayName = 'Lodging';