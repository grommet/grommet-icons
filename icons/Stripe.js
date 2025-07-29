"use strict";

exports.__esModule = true;
exports.Stripe = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Stripe = exports.Stripe = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Stripe"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1 1H23V23H1V1ZM11.1196 9.18908C11.1196 8.58623 11.6143 8.35436 12.4336 8.35436C13.6084 8.35436 15.0923 8.70989 16.2671 9.34366V5.71106C14.9841 5.20095 13.7166 5 12.4336 5C9.2956 5 7.20879 6.63853 7.20879 9.37458C7.20879 13.641 13.0828 12.9608 13.0828 14.8003C13.0828 15.5114 12.4645 15.7432 11.5988 15.7432C10.3158 15.7432 8.67729 15.2177 7.37883 14.5066V18.1856C8.81641 18.8039 10.2695 19.0667 11.5988 19.0667C14.8141 19.0667 17.0245 17.4745 17.0245 14.7075C17.0091 10.1011 11.1196 10.9204 11.1196 9.18908Z",
    fill: "#AACBFB"
  }));
});
Stripe.displayName = 'Stripe';