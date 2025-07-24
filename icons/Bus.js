"use strict";

exports.__esModule = true;
exports.Bus = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Bus = exports.Bus = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Bus"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6 14.71C7.10457 14.71 8 15.6054 8 16.71C8 17.8145 7.10457 18.71 6 18.71C4.89543 18.71 4 17.8145 4 16.71C4 15.6054 4.89543 14.71 6 14.71Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18 14.71C19.1046 14.71 20 15.6054 20 16.71C20 17.8145 19.1046 18.71 18 18.71C16.8954 18.71 16 17.8145 16 16.71C16 15.6054 16.8954 14.71 18 14.71Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14 17.71H10C9.44771 17.71 9 17.2622 9 16.71C9 16.1577 9.44771 15.71 10 15.71H14V17.71Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 1.70996C20.6569 1.70996 22 3.05311 22 4.70996V7.70996H23C23.5523 7.70996 24 8.15768 24 8.70996V12.71C24 13.2622 23.5523 13.71 23 13.71H22.8262C22.9369 14.023 23 14.359 23 14.71V22.71C23 23.8145 22.1046 24.71 21 24.71H19C18.2601 24.71 17.6155 24.3073 17.2695 23.71H17C15.8954 23.71 15 22.8145 15 21.71H9C9 22.8145 8.10457 23.71 7 23.71H6.73047C6.38454 24.3073 5.73993 24.71 5 24.71H3C1.89543 24.71 1 23.8145 1 22.71V14.71C1 14.359 1.06306 14.023 1.17383 13.71H1C0.447715 13.71 0 13.2622 0 12.71V8.70996C0 8.15768 0.447715 7.70996 1 7.70996H2V4.70996C2 3.05311 3.34315 1.70996 5 1.70996H19ZM3 22.71H5V21.71H3V22.71ZM19 22.71H21V21.71H19V22.71ZM4 13.71C3.44772 13.71 3 14.1577 3 14.71V19.71H21V14.71C21 14.1577 20.5523 13.71 20 13.71H4ZM4 11.71H11V6.70996H4V11.71ZM13 11.71H20V6.70996H13V11.71ZM5 3.70996C4.48232 3.70996 4.05621 4.10329 4.00488 4.60742L4 4.70996H20C20 4.15768 19.5523 3.70996 19 3.70996H5Z",
    fill: "#000"
  }));
});
Bus.displayName = 'Bus';