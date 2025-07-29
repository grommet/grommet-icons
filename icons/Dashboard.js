"use strict";

exports.__esModule = true;
exports.Dashboard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Dashboard = exports.Dashboard = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Dashboard"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM5.29297 18C6.94091 19.8409 9.33481 21 12 21C14.6652 21 17.0591 19.8409 18.707 18H5.29297ZM14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16H14ZM11 5V3.05664C9.26421 3.24856 7.67754 3.93306 6.38281 4.96875L7.70703 6.29297L7.77539 6.36914C8.09574 6.76191 8.07315 7.34092 7.70703 7.70703C7.34092 8.07315 6.76191 8.09574 6.36914 7.77539L6.29297 7.70703L4.96875 6.38281C3.93306 7.67754 3.24856 9.26421 3.05664 11H5C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13H3.05664C3.17468 14.0676 3.47936 15.0783 3.9375 16H8C8 14.1362 9.27477 12.57 11 12.126V8.47559C11.0002 7.92351 11.4479 7.47559 12 7.47559C12.5521 7.47559 12.9998 7.92351 13 8.47559V12.126C14.7252 12.57 16 14.1362 16 16H20.0625C20.5206 15.0783 20.8253 14.0676 20.9434 13H19C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11H20.9434C20.7514 9.264 20.0662 7.67762 19.0303 6.38281L17.707 7.70703C17.3165 8.09756 16.6835 8.09756 16.293 7.70703C15.9024 7.31651 15.9024 6.68349 16.293 6.29297L17.6162 4.96875C16.3216 3.93333 14.7355 3.24853 13 3.05664V5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5Z",
    fill: "#000"
  }));
});
Dashboard.displayName = 'Dashboard';