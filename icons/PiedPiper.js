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
    fill: "#609B4D",
    fillRule: "evenodd",
    d: "M0,19.4210526 C2.2736843,19.4210526 4.04210525,18.6631579 4.04210525,18.6631579 C4.04210525,18.6631579 7.0736842,11.0842105 11.368421,11.0842105 C14.6526316,11.0842105 15.1578947,13.6105264 15.1578947,13.6105264 C15.1578947,13.6105264 19.9578947,4.26315788 24,3 C20.2105263,6.03157895 20.7157895,9.31578948 18.9473684,10.831579 C17.1789474,12.3473684 17.1789477,10.8381579 15.1578951,14.375 C10.6105267,14.8802632 9.125,16.3894739 6.06315789,18.1578947 C11.3684206,15.6315794 12.3789474,15.3789474 17.1789474,15.631579 C17.6828892,15.6581022 17.9368421,15.8842105 17.6842105,16.3894737 C16.951256,17.8553827 16.4037001,20.0617486 15.4105263,19.9263158 C9.85263157,19.1684211 6.56842104,20.431579 3.78947367,20.431579 C1.0105263,20.431579 0,19.9263158 0,19.4210526 Z"
  }));
});
PiedPiper.displayName = 'PiedPiper';