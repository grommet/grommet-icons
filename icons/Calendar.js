"use strict";

exports.__esModule = true;
exports.Calendar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Calendar = exports.Calendar = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "CalendarMonth"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 16C7.55228 16 8 16.4477 8 17C8 17.5523 7.55228 18 7 18H6C5.44772 18 5 17.5523 5 17C5 16.4477 5.44772 16 6 16H7ZM12.5 16C13.0523 16 13.5 16.4477 13.5 17C13.5 17.5523 13.0523 18 12.5 18H11.5C10.9477 18 10.5 17.5523 10.5 17C10.5 16.4477 10.9477 16 11.5 16H12.5ZM18 16C18.5523 16 19 16.4477 19 17C19 17.5523 18.5523 18 18 18H17C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16H18ZM7 12C7.55228 12 8 12.4477 8 13C8 13.5523 7.55228 14 7 14H6C5.44772 14 5 13.5523 5 13C5 12.4477 5.44772 12 6 12H7ZM12.5 12C13.0523 12 13.5 12.4477 13.5 13C13.5 13.5523 13.0523 14 12.5 14H11.5C10.9477 14 10.5 13.5523 10.5 13C10.5 12.4477 10.9477 12 11.5 12H12.5ZM18 12C18.5523 12 19 12.4477 19 13C19 13.5523 18.5523 14 18 14H17C16.4477 14 16 13.5523 16 13C16 12.4477 16.4477 12 17 12H18ZM7 8C7.55228 8 8 8.44771 8 9C8 9.55229 7.55228 10 7 10H6C5.44772 10 5 9.55229 5 9C5 8.44771 5.44772 8 6 8H7ZM12.5 8C13.0523 8 13.5 8.44771 13.5 9C13.5 9.55229 13.0523 10 12.5 10H11.5C10.9477 10 10.5 9.55229 10.5 9C10.5 8.44771 10.9477 8 11.5 8H12.5ZM18 8C18.5523 8 19 8.44771 19 9C19 9.55229 18.5523 10 18 10H17C16.4477 10 16 9.55229 16 9C16 8.44771 16.4477 8 17 8H18ZM15 4V3H9V4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4V3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H17V4C17 4.55228 16.5523 5 16 5C15.4477 5 15 4.55228 15 4ZM23 18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6C1 3.23858 3.23858 1 6 1H7C7 0.447715 7.44772 0 8 0C8.55228 0 9 0.447715 9 1H15C15 0.447715 15.4477 0 16 0C16.5523 0 17 0.447715 17 1H18C20.7614 1 23 3.23858 23 6V18Z",
    fill: "#000"
  }));
});
Calendar.displayName = 'Calendar';