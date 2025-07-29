"use strict";

exports.__esModule = true;
exports.Paypal = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Paypal = exports.Paypal = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Paypal"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.4945 7.05412C20.425 12.0266 17.0155 14.6584 11.605 14.6584H9.643L8.17975 24.0004H11.362C11.8218 24.0004 12.2125 23.6659 12.2845 23.2121L12.322 23.0141L13.054 18.3776L13.1013 18.1219C13.1725 17.6681 13.564 17.3336 14.023 17.3336H14.6043C18.364 17.3336 21.3085 15.8059 22.1688 11.3884C22.5138 9.61538 22.348 8.12887 21.4945 7.05412ZM19.3173 1.80975C18.2058 0.543 16.1973 0 13.627 0H6.169C5.64325 0 5.19625 0.3825 5.11375 0.90075L2.008 20.5972C1.9465 20.9858 2.24725 21.3375 2.641 21.3375H7.24525L8.40175 14.0025L8.36575 14.232C8.44825 13.7138 8.89225 13.3313 9.41725 13.3313H11.605C15.904 13.3313 19.2693 11.5852 20.2525 6.53475C20.2818 6.38475 20.329 6.0975 20.329 6.0975C20.608 4.2285 20.3268 2.96025 19.3173 1.80975Z",
    fill: "#003087"
  }));
});
Paypal.displayName = 'Paypal';