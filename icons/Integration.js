"use strict";

exports.__esModule = true;
exports.Integration = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Integration = exports.Integration = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Integration"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 8C20.7614 8 23 10.2386 23 13V17C23 19.7614 20.7614 22 18 22H10V20H14C15.6569 20 17 18.6569 17 17V13C17 11.3431 15.6569 10 14 10H10V8H18ZM18 10C18.6278 10.8357 19 11.8743 19 13V17C19 18.1257 18.6278 19.1643 18 20C19.6569 20 21 18.6569 21 17V13C21 11.3431 19.6569 10 18 10Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 4H10C8.34315 4 7 5.34315 7 7V11C7 12.6569 8.34315 14 10 14H14V16H6C3.23858 16 1 13.7614 1 11V7C1 4.23858 3.23858 2 6 2H14V4ZM6 4C4.34315 4 3 5.34315 3 7V11C3 12.6051 4.26055 13.9158 5.8457 13.9961L6 14C5.37223 13.1643 5 12.1257 5 11V7C5 5.87432 5.37223 4.83569 6 4Z",
    fill: "#000"
  }));
});
Integration.displayName = 'Integration';