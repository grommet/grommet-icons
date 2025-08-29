"use strict";

exports.__esModule = true;
exports.Progress = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Progress = exports.Progress = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Progress"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 16C21.6569 16 23 17.3431 23 19C23 20.6569 21.6569 22 20 22H4C2.34315 22 1 20.6569 1 19C1 17.3431 2.34315 16 4 16H20ZM4 18C3.44772 18 3 18.4477 3 19C3 19.5177 3.39333 19.9438 3.89746 19.9951L4 20H8C8.55228 20 9 19.5523 9 19C9 18.4477 8.55228 18 8 18H4ZM10.8262 18C10.9369 18.3131 11 18.649 11 19C11 19.351 10.9369 19.6869 10.8262 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H10.8262Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 9C21.6569 9 23 10.3431 23 12C23 13.6569 21.6569 15 20 15H4C2.34315 15 1 13.6569 1 12C1 10.3431 2.34315 9 4 9H20ZM4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13C4.55228 13 5 12.5523 5 12C5 11.4477 4.55228 11 4 11ZM6.82617 11C6.93694 11.3131 7 11.649 7 12C7 12.351 6.93694 12.6869 6.82617 13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H6.82617Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 2C21.6569 2 23 3.34315 23 5C23 6.65685 21.6569 8 20 8H4C2.34315 8 1 6.65685 1 5C1 3.34315 2.34315 2 4 2H20ZM4 4C3.44772 4 3 4.44772 3 5C3 5.51768 3.39333 5.94379 3.89746 5.99512L4 6H14C14.5523 6 15 5.55228 15 5C15 4.44772 14.5523 4 14 4H4ZM16.8262 4C16.9369 4.31306 17 4.649 17 5C17 5.351 16.9369 5.68694 16.8262 6H20C20.5523 6 21 5.55228 21 5C21 4.44772 20.5523 4 20 4H16.8262Z",
    fill: "#000"
  }));
});
Progress.displayName = 'Prgress';