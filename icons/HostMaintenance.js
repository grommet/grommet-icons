"use strict";

exports.__esModule = true;
exports.HostMaintenance = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var HostMaintenance = exports.HostMaintenance = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "HostMaintenance"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6 6H5V4H6V6Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 1C21.6569 1 23 2.34315 23 4V10C23 10.5523 22.5523 11 22 11C21.4477 11 21 10.5523 21 10V9H3V13H14C14.5523 13 15 13.4477 15 14C15 14.5523 14.5523 15 14 15H3V18C3 18.5523 3.44772 19 4 19H11C11.5523 19 12 19.4477 12 20C12 20.5523 11.5523 21 11 21C11.5523 21 12 21.4477 12 22C12 22.5523 11.5523 23 11 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H4C2.34315 21 1 19.6569 1 18V4C1 2.34315 2.34315 1 4 1H20ZM4 3C3.44772 3 3 3.44772 3 4V7H21V4C21 3.44772 20.5523 3 20 3H4Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M21 13C21.5523 13 22 13.4477 22 14C22 14.5177 21.6067 14.9438 21.1025 14.9951L20.8975 15.0049C20.3933 15.0562 20 15.4823 20 16C20 16.5523 20.4477 17 21 17C21.5177 17 21.9438 16.6067 21.9951 16.1025L22.0049 15.8975C22.0562 15.3933 22.4823 15 23 15C23.5523 15 24 15.4477 24 16C24 17.6569 22.6569 19 21 19C20.5371 19 20.1005 18.8913 19.709 18.7041L15.707 22.707C15.3165 23.0976 14.6835 23.0976 14.293 22.707C13.9024 22.3165 13.9024 21.6835 14.293 21.293L18.2949 17.29C18.108 16.8988 18 16.4625 18 16C18 14.3431 19.3431 13 21 13Z",
    fill: "#000"
  }));
});
HostMaintenance.displayName = 'HostMaintenance';