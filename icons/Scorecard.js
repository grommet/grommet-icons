"use strict";

exports.__esModule = true;
exports.Scorecard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Scorecard = exports.Scorecard = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Scorecard"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6 12C6.55228 12 7 12.4477 7 13V18H5V13C5 12.4477 5.44772 12 6 12Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M9 15C9.55228 15 10 15.4477 10 16V18H8V16C8 15.4477 8.44772 15 9 15Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 10C12.5523 10 13 10.4477 13 11V18H11V11C11 10.4477 11.4477 10 12 10Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15 13C15.5523 13 16 13.4477 16 14V18H14V14C14 13.4477 14.4477 13 15 13Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18 16C18.5523 16 19 16.4477 19 17V18H17V17C17 16.4477 17.4477 16 18 16Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 1C20.7614 1 23 3.23858 23 6V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6C1 3.23858 3.23858 1 6 1H18ZM18.8701 3.12891C18.9537 3.40471 19 3.6969 19 4C19 5.65685 17.6569 7 16 7H8C6.34315 7 5 5.65685 5 4C5 3.697 5.04536 3.40463 5.12891 3.12891C3.89694 3.50219 3 4.64615 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.64582 20.1025 3.50191 18.8701 3.12891ZM8 3C7.44772 3 7 3.44772 7 4C7 4.55228 7.44772 5 8 5H16C16.5523 5 17 4.55228 17 4C17 3.44772 16.5523 3 16 3H15.9131C15.707 3.58234 15.1529 4 14.5 4H9.5C8.84707 4 8.29297 3.58234 8.08691 3H8Z",
    fill: "#000"
  }));
});
Scorecard.displayName = 'Scorecard';