"use strict";

exports.__esModule = true;
exports.SchedulePlay = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SchedulePlay = exports.SchedulePlay = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "SchedulePlay"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 16.8682C16.0003 15.2711 17.7804 14.3183 19.1094 15.2041L22.3066 17.3359C23.4941 18.1276 23.4941 19.8724 22.3066 20.6641L19.1094 22.7959C17.7804 23.6817 16.0003 22.7289 16 21.1318V16.8682ZM18 21.1318L21.1973 19L18 16.8682V21.1318Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 0C15.5523 0 16 0.447715 16 1V2H18C19.6569 2 21 3.34315 21 5V13C21 13.5523 20.5523 14 20 14C19.4477 14 19 13.5523 19 13V8H3V17C3 17.5523 3.44772 18 4 18H13.0859C13.6382 18 14.0859 18.4477 14.0859 19C14.0859 19.5523 13.6382 20 13.0859 20H4C2.34315 20 1 18.6569 1 17V5C1 3.34315 2.34315 2 4 2H6V1C6 0.447715 6.44772 0 7 0C7.55228 0 8 0.447715 8 1V2H14V1C14 0.447715 14.4477 0 15 0ZM4 4C3.44772 4 3 4.44772 3 5V6H19V5C19 4.44772 18.5523 4 18 4H4Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 14C7.55228 14 8 14.4477 8 15C8 15.5523 7.55228 16 7 16H6C5.44772 16 5 15.5523 5 15C5 14.4477 5.44772 14 6 14H7Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 14C12.5523 14 13 14.4477 13 15C13 15.5523 12.5523 16 12 16H10C9.44772 16 9 15.5523 9 15C9 14.4477 9.44772 14 10 14H12Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 10C7.55228 10 8 10.4477 8 11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11C5 10.4477 5.44772 10 6 10H7Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16.0859 10C16.6382 10 17.0859 10.4477 17.0859 11C17.0859 11.5523 16.6382 12 16.0859 12H10.0859C9.53365 12 9.08594 11.5523 9.08594 11C9.08594 10.4477 9.53365 10 10.0859 10H16.0859Z",
    fill: "#000"
  }));
});
SchedulePlay.displayName = 'SchedulePlay';