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
    d: "M6 6.27686H5V4.27686H6V6.27686Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 1.27686C21.6569 1.27686 23 2.62 23 4.27686V10.2769C23 10.8291 22.5523 11.2769 22 11.2769C21.4477 11.2769 21 10.8291 21 10.2769V9.27686H3V13.2769H14C14.5523 13.2769 15 13.7246 15 14.2769C15 14.8291 14.5523 15.2769 14 15.2769H3V18.2769C3 18.8291 3.44772 19.2769 4 19.2769H11C11.5523 19.2769 12 19.7246 12 20.2769C12 20.8291 11.5523 21.2769 11 21.2769C11.5523 21.2769 12 21.7246 12 22.2769C12 22.8291 11.5523 23.2769 11 23.2769H2C1.44772 23.2769 1 22.8291 1 22.2769C1 21.7246 1.44772 21.2769 2 21.2769H4C2.34315 21.2769 1 19.9337 1 18.2769V4.27686C1 2.62 2.34315 1.27686 4 1.27686H20ZM4 3.27686C3.44772 3.27686 3 3.72457 3 4.27686V7.27686H21V4.27686C21 3.72457 20.5523 3.27686 20 3.27686H4Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M21 13.2769C21.5523 13.2769 22 13.7246 22 14.2769C22 14.7945 21.6067 15.2206 21.1025 15.272L20.8975 15.2817C20.3933 15.3331 20 15.7592 20 16.2769C20 16.8291 20.4477 17.2769 21 17.2769C21.5177 17.2769 21.9438 16.8835 21.9951 16.3794L22.0049 16.1743C22.0562 15.6702 22.4823 15.2769 23 15.2769C23.5523 15.2769 24 15.7246 24 16.2769C24 17.9337 22.6569 19.2769 21 19.2769C20.5371 19.2769 20.1005 19.1682 19.709 18.981L15.707 22.9839C15.3165 23.3744 14.6835 23.3744 14.293 22.9839C13.9024 22.5934 13.9024 21.9603 14.293 21.5698L18.2949 17.5669C18.108 17.1757 18 16.7393 18 16.2769C18 14.62 19.3431 13.2769 21 13.2769Z",
    fill: "#000"
  }));
});
HostMaintenance.displayName = 'HostMaintenance';