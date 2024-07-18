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
    fill: "#003087",
    fillRule: "evenodd",
    d: "M21.495 7.054c-1.07 4.973-4.48 7.604-9.89 7.604H9.643L8.18 24h3.182c.46 0 .85-.334.923-.788l.037-.198.732-4.636.047-.256a.933.933 0 0 1 .922-.788h.581c3.76 0 6.705-1.528 7.565-5.946.345-1.773.179-3.26-.674-4.334M19.317 1.81C18.206.543 16.197 0 13.627 0H6.169c-.526 0-.973.383-1.055.9L2.008 20.598a.64.64 0 0 0 .633.74h4.604l1.157-7.335-.036.23c.082-.518.526-.9 1.051-.9h2.188c4.299 0 7.664-1.747 8.648-6.797.029-.15.076-.438.076-.438.279-1.869-.002-3.137-1.012-4.287"
  }));
});
Paypal.displayName = 'Paypal';