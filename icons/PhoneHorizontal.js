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
    d: "M5 10.2769C5.55228 10.2769 6 10.7246 6 11.2769V13.2769C6 13.8291 5.55228 14.2769 5 14.2769C4.44772 14.2769 4 13.8291 4 13.2769V11.2769C4 10.7246 4.44772 10.2769 5 10.2769Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.1543 5.28076C21.7394 5.36107 23 6.67175 23 8.27686V16.2769L22.9961 16.4312C22.9184 17.9652 21.6883 19.1952 20.1543 19.2729L20 19.2769H4C2.3949 19.2769 1.08421 18.0163 1.00391 16.4312L1 16.2769V8.27686C1 6.62 2.34315 5.27686 4 5.27686H20L20.1543 5.28076ZM4 7.27686C3.44772 7.27686 3 7.72457 3 8.27686V16.2769L3.00488 16.3794C3.05621 16.8835 3.48232 17.2769 4 17.2769H17V7.27686H4ZM19 17.2769H20L20.1025 17.272C20.573 17.2241 20.9472 16.8498 20.9951 16.3794L21 16.2769V8.27686L20.9951 8.17432C20.9472 7.70389 20.573 7.32964 20.1025 7.28174L20 7.27686H19V17.2769Z",
    fill: "#000"
  }));
});
PhoneHorizontal.displayName = 'PhoneHorizontal';