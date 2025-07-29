"use strict";

exports.__esModule = true;
exports.Calculator = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Calculator = exports.Calculator = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Calculator"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 15C8.10457 15 9 15.8954 9 17C9 18.1046 8.10457 19 7 19C5.89543 19 5 18.1046 5 17C5 15.8954 5.89543 15 7 15Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 15C13.1046 15 14 15.8954 14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 15.8954 10.8954 15 12 15Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M17 10C18.1046 10 19 10.8954 19 12V17C19 18.1046 18.1046 19 17 19C15.8954 19 15 18.1046 15 17V12C15 10.8954 15.8954 10 17 10Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 10C8.10457 10 9 10.8954 9 12C9 13.1046 8.10457 14 7 14C5.89543 14 5 13.1046 5 12C5 10.8954 5.89543 10 7 10Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 1C20.7614 1 23 3.23858 23 6V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6C1 3.23858 3.23858 1 6 1H18ZM3 18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V8H3V18ZM6 3C4.34315 3 3 4.34315 3 6H21C21 4.34315 19.6569 3 18 3H6Z",
    fill: "#000"
  }));
});
Calculator.displayName = 'Calculator';