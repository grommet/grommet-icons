"use strict";

exports.__esModule = true;
exports.Login = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Login = exports.Login = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Login"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18 1C20.7614 1.00003 23 3.23862 23 6V18C23 20.7614 20.7614 23 18 23H16C15.4478 23 15 22.5523 15 22C15 21.4478 15.4478 21 16 21H18C19.6568 21 21 19.6568 21 18V6C21 4.34319 19.6568 3.00003 18 3H16C15.4478 2.99995 15 2.55225 15 2C15 1.44777 15.4478 1.00005 16 1H18Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M9.29297 6.29297C9.6835 5.90251 10.3165 5.90246 10.707 6.29297L15.707 11.293C16.0975 11.6835 16.0975 12.3165 15.707 12.707L10.707 17.707C10.3165 18.0976 9.68349 18.0976 9.29297 17.707C8.90244 17.3165 8.90244 16.6835 9.29297 16.293L12.5859 13H2C1.44772 13 1 12.5523 1 12C1.00003 11.4477 1.44774 11 2 11H12.5859L9.29297 7.70703C8.90244 7.31651 8.90244 6.68349 9.29297 6.29297Z",
    fill: "#000"
  }));
});
Login.displayName = 'Login';