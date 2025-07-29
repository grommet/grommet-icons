"use strict";

exports.__esModule = true;
exports.PhoneHorizontal = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var PhoneHorizontal = exports.PhoneHorizontal = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "PhoneHorizontal"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5 10C5.55228 10 6 10.4477 6 11V13C6 13.5523 5.55228 14 5 14C4.44772 14 4 13.5523 4 13V11C4 10.4477 4.44772 10 5 10Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.1543 5.00391C21.7394 5.08421 23 6.39489 23 8V16L22.9961 16.1543C22.9184 17.6883 21.6883 18.9184 20.1543 18.9961L20 19H4C2.3949 19 1.08421 17.7394 1.00391 16.1543L1 16V8C1 6.34315 2.34315 5 4 5H20L20.1543 5.00391ZM4 7C3.44772 7 3 7.44772 3 8V16L3.00488 16.1025C3.05621 16.6067 3.48232 17 4 17H17V7H4ZM19 17H20L20.1025 16.9951C20.573 16.9472 20.9472 16.573 20.9951 16.1025L21 16V8L20.9951 7.89746C20.9472 7.42703 20.573 7.05278 20.1025 7.00488L20 7H19V17Z",
    fill: "#000"
  }));
});
PhoneHorizontal.displayName = 'PhoneHorizontal';