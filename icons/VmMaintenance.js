"use strict";

exports.__esModule = true;
exports.VmMaintenance = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var VmMaintenance = exports.VmMaintenance = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "VmMaintenance"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M20 1C21.6569 1 23 2.34315 23 4V9.5C23 10.0523 22.5523 10.5 22 10.5C21.4477 10.5 21 10.0523 21 9.5V4C21 3.44772 20.5523 3 20 3H9C8.44772 3 8 3.44772 8 4V6H15C16.6569 6 18 7.34315 18 9V10.75C18 11.3023 17.5523 11.75 17 11.75C16.4477 11.75 16 11.3023 16 10.75V9C16 8.44772 15.5523 8 15 8H8V15C8 15.5523 8.44772 16 9 16H10.75C11.3023 16 11.75 16.4477 11.75 17C11.75 17.5523 11.3023 18 10.75 18H9C7.34315 18 6 16.6569 6 15V8H4C3.44772 8 3 8.44772 3 9V20C3 20.5523 3.44772 21 4 21H9.5C10.0523 21 10.5 21.4477 10.5 22C10.5 22.5523 10.0523 23 9.5 23H4C2.34315 23 1 21.6569 1 20V9C1 7.34315 2.34315 6 4 6H6V4C6 2.34315 7.34315 1 9 1H20Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M21 13C21.5523 13 22 13.4477 22 14C22 14.5177 21.6067 14.9438 21.1025 14.9951L20.8975 15.0049C20.3933 15.0562 20 15.4823 20 16C20 16.5523 20.4477 17 21 17C21.5177 17 21.9438 16.6067 21.9951 16.1025L22.0049 15.8975C22.0562 15.3933 22.4823 15 23 15C23.5523 15 24 15.4477 24 16C24 17.6569 22.6569 19 21 19C20.5371 19 20.1005 18.8913 19.709 18.7041L15.707 22.707C15.3165 23.0976 14.6835 23.0976 14.293 22.707C13.9024 22.3165 13.9024 21.6835 14.293 21.293L18.2949 17.29C18.108 16.8988 18 16.4625 18 16C18 14.3431 19.3431 13 21 13Z",
    fill: "#000"
  }));
});
VmMaintenance.displayName = 'VmMaintenance';