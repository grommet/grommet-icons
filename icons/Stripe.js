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
    fill: "#AACBFB",
    fillRule: "evenodd",
    d: "M1 1h22v22H1V1zm10.12 8.19c0-.604.494-.836 1.314-.836 1.174 0 2.658.356 3.833.99V5.71c-1.283-.509-2.55-.71-3.833-.71-3.138 0-5.225 1.639-5.225 4.375 0 4.266 5.874 3.586 5.874 5.425 0 .711-.619.943-1.484.943-1.283 0-2.922-.525-4.22-1.236v3.679c1.437.618 2.89.88 4.22.88 3.215 0 5.426-1.591 5.426-4.358-.016-4.607-5.905-3.788-5.905-5.519z"
  }));
});
Stripe.displayName = 'Stripe';