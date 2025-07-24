"use strict";

exports.__esModule = true;
exports.Iteration = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Iteration = exports.Iteration = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Iteration"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M2 11C2.55228 11 3 11.4477 3 12V14C3 17.866 6.13401 21 10 21H12V23H10C5.02944 23 1 18.9706 1 14V12C1 11.4477 1.44772 11 2 11Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5 6C5.55228 6 6 6.44772 6 7V13C6 15.7614 8.23858 18 11 18H17V20H11C7.13401 20 4 16.866 4 13V7C4 6.44772 4.44772 6 5 6Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 1C20.7614 1 23 3.23858 23 6V12C23 14.7614 20.7614 17 18 17H12C9.23858 17 7 14.7614 7 12V6C7 3.23858 9.23858 1 12 1H18ZM12 3C10.3431 3 9 4.34315 9 6V12C9 13.6569 10.3431 15 12 15H18C19.6569 15 21 13.6569 21 12V6C21 4.34315 19.6569 3 18 3H12Z",
    fill: "#000"
  }));
});
Iteration.displayName = 'Iteration';