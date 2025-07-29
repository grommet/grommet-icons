"use strict";

exports.__esModule = true;
exports.LinkedinOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var LinkedinOption = exports.LinkedinOption = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "LinkedinOption"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22.0367 22H17.8849V15.5036C17.8849 13.9543 17.8586 11.9615 15.7276 11.9615C13.5677 11.9615 13.2379 13.6499 13.2379 15.3925V22H9.09037V8.64071H13.0708V10.4673H13.1276C13.6814 9.41667 15.0356 8.30916 17.0556 8.30916C21.2599 8.30916 22.0367 11.0753 22.0367 14.6734V22ZM4.40924 6.81585C3.07515 6.81585 2 5.73721 2 4.40749C2 3.07865 3.07515 2 4.40924 2C5.73721 2 6.81585 3.07865 6.81585 4.40749C6.81585 5.73721 5.73721 6.81585 4.40924 6.81585ZM6.48605 22H2.3298V8.64071H6.48605V22Z",
    fill: "#0077B5"
  }));
});
LinkedinOption.displayName = 'LinkedinOption';