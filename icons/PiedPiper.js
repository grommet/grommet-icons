"use strict";

exports.__esModule = true;
exports.PiedPiper = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var PiedPiper = exports.PiedPiper = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "PiedPiper"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 19.4211C2.27368 19.4211 4.04211 18.6632 4.04211 18.6632C4.04211 18.6632 7.07368 11.0842 11.3684 11.0842C14.6526 11.0842 15.1579 13.6105 15.1579 13.6105C15.1579 13.6105 19.9579 4.26316 24 3C20.2105 6.03158 20.7158 9.31579 18.9474 10.8316C17.1789 12.3474 17.1789 10.8382 15.1579 14.375C10.6105 14.8803 9.125 16.3895 6.06316 18.1579C11.3684 15.6316 12.3789 15.3789 17.1789 15.6316C17.6829 15.6581 17.9368 15.8842 17.6842 16.3895C16.9513 17.8554 16.4037 20.0617 15.4105 19.9263C9.85263 19.1684 6.56842 20.4316 3.78947 20.4316C1.01053 20.4316 0 19.9263 0 19.4211Z",
    fill: "#609B4D"
  }));
});
PiedPiper.displayName = 'PiedPiper';