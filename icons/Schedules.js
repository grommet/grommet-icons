"use strict";

exports.__esModule = true;
exports.Schedules = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Schedules = exports.Schedules = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Schedules"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 14C7.55228 14 8 14.4477 8 15C8 15.5523 7.55228 16 7 16H6C5.44772 16 5 15.5523 5 15C5 14.4477 5.44772 14 6 14H7Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.0859 14C12.6382 14 13.0859 14.4477 13.0859 15C13.0859 15.5523 12.6382 16 12.0859 16H10.0859C9.53365 16 9.08594 15.5523 9.08594 15C9.08594 14.4477 9.53365 14 10.0859 14H12.0859Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 10C7.55228 10 8 10.4477 8 11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11C5 10.4477 5.44772 10 6 10H7Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.0859 10C15.6382 10 16.0859 10.4477 16.0859 11C16.0859 11.5523 15.6382 12 15.0859 12H10.0859C9.53365 12 9.08594 11.5523 9.08594 11C9.08594 10.4477 9.53365 10 10.0859 10H15.0859Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 0C14.5523 0 15 0.447715 15 1V2H17C18.6569 2 20 3.34315 20 5C21.6569 5 23 6.34315 23 8V20C23 21.6569 21.6569 23 20 23H7C5.34315 23 4 21.6569 4 20C2.34315 20 1 18.6569 1 17V5C1 3.34315 2.34315 2 4 2H5V1C5 0.447715 5.44772 0 6 0C6.55228 0 7 0.447715 7 1V2H13V1C13 0.447715 13.4477 0 14 0ZM20 17C20 18.6569 18.6569 20 17 20H6C6 20.5523 6.44772 21 7 21H20C20.5523 21 21 20.5523 21 20V8C21 7.44772 20.5523 7 20 7V17ZM3 17C3 17.5523 3.44772 18 4 18H17C17.5523 18 18 17.5523 18 17V8H3V17ZM4 4C3.44772 4 3 4.44772 3 5V6H18V5C18 4.44772 17.5523 4 17 4H4Z",
    fill: "#000"
  }));
});
Schedules.displayName = 'Schedules';