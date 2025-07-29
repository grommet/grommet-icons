"use strict";

exports.__esModule = true;
exports.Currency = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Currency = exports.Currency = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Currency"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3 6V18H21V6H3ZM23 18C23 19.1046 22.1046 20 21 20H3C1.89543 20 1 19.1046 1 18V6C1 4.89543 1.89543 4 3 4H21C22.1046 4 23 4.89543 23 6V18Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 5C7 7.20914 5.20914 9 3 9V7C4.10457 7 5 6.10457 5 5H7Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 19C7 16.7909 5.20914 15 3 15V17C4.10457 17 5 17.8954 5 19H7Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M17 5C17 7.20914 18.7909 9 21 9V7C19.8954 7 19 6.10457 19 5H17Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M17 19C17 16.7909 18.7909 15 21 15V17C19.8954 17 19 17.8954 19 19H17Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14 12C14 11.0909 13.7223 10.3062 13.3213 9.77148C12.9205 9.2371 12.4431 9 12 9C11.5569 9 11.0795 9.2371 10.6787 9.77148C10.2777 10.3062 10 11.0909 10 12C10 12.9091 10.2777 13.6938 10.6787 14.2285C11.0795 14.7629 11.5569 15 12 15C12.4431 15 12.9205 14.7629 13.3213 14.2285C13.7223 13.6938 14 12.9091 14 12ZM16 12C16 13.3 15.6056 14.5157 14.9209 15.4287C14.2359 16.3418 13.2136 17 12 17C10.7864 17 9.76406 16.3418 9.0791 15.4287C8.39437 14.5157 8 13.3 8 12C8 10.7 8.39437 9.48426 9.0791 8.57129C9.76406 7.65821 10.7864 7 12 7C13.2136 7 14.2359 7.65821 14.9209 8.57129C15.6056 9.48426 16 10.7 16 12Z",
    fill: "#000"
  }));
});
Currency.displayName = 'Currency';