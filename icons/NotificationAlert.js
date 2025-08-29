"use strict";

exports.__esModule = true;
exports.NotificationAlert = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var NotificationAlert = exports.NotificationAlert = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "NotificationAlert"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5 19V21H19V19H5ZM8 13C8 10.7909 9.79086 9 12 9C12.5523 9 13 9.44772 13 10C13 10.5523 12.5523 11 12 11C10.8954 11 10 11.8954 10 13C10 13.5523 9.55229 14 9 14C8.44772 14 8 13.5523 8 13ZM5.29297 3.79297C5.65908 3.42685 6.23809 3.40426 6.63086 3.72461L6.70703 3.79297L7.70703 4.79297L7.77539 4.86914C8.09574 5.26191 8.07315 5.84092 7.70703 6.20703C7.34092 6.57315 6.76191 6.59574 6.36914 6.27539L6.29297 6.20703L5.29297 5.20703L5.22461 5.13086C4.90426 4.73809 4.92685 4.15908 5.29297 3.79297ZM17.293 3.79297C17.6835 3.40244 18.3165 3.40244 18.707 3.79297C19.0976 4.18349 19.0976 4.81651 18.707 5.20703L17.707 6.20703C17.3165 6.59756 16.6835 6.59756 16.293 6.20703C15.9024 5.81651 15.9024 5.18349 16.293 4.79297L17.293 3.79297ZM11 4.5V2.5C11 1.94772 11.4477 1.5 12 1.5C12.5523 1.5 13 1.94772 13 2.5V4.5C13 5.05228 12.5523 5.5 12 5.5C11.4477 5.5 11 5.05228 11 4.5ZM17 13C17 10.2386 14.7614 8 12 8C9.23858 8 7 10.2386 7 13V17H17V13ZM19 17C20.1046 17 21 17.8954 21 19V21H22C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H3V19C3 17.8954 3.89543 17 5 17V13C5 9.13401 8.13401 6 12 6C15.866 6 19 9.13401 19 13V17Z",
    fill: "#000"
  }));
});
NotificationAlert.displayName = 'NotificationAlert';