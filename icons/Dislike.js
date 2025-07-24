"use strict";

exports.__esModule = true;
exports.Dislike = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Dislike = exports.Dislike = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Dislike"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.9136 1.71436C12.513 1.71436 13.1083 1.82233 13.6695 2.03271L16.8208 3.21436H21.6392C22.1913 3.2144 22.6389 3.66232 22.6392 4.21436C22.6392 4.76662 22.1915 5.21432 21.6392 5.21436H16.6392C16.5194 5.2143 16.3998 5.19293 16.2876 5.15088L16.6392 4.21436V4.2124L16.2876 5.15088L12.9673 3.90576C12.6307 3.77959 12.2732 3.71436 11.9136 3.71436H7.02788C5.56157 3.71458 4.30998 4.77577 4.06889 6.22217L3.01323 12.5513C2.91231 13.1603 3.38314 13.7151 4.00054 13.7153L9.13921 13.7144C9.49703 13.7144 9.82799 13.9062 10.0064 14.2163C10.1847 14.5267 10.1828 14.909 10.0025 15.2183L7.54253 19.436C7.32666 19.8069 7.50652 20.2836 7.91362 20.4194L8.0103 20.4438C8.23751 20.4839 8.47286 20.4047 8.63042 20.23L12.396 16.0454L12.4322 16.0073L15.9322 12.5073L16.0054 12.4409C16.1832 12.2952 16.4073 12.2145 16.6392 12.2144H21.6392C22.1913 12.2144 22.6389 12.6623 22.6392 13.2144C22.6392 13.7666 22.1915 14.2143 21.6392 14.2144H17.0533L13.8638 17.4028L10.1167 21.5679C9.4489 22.3095 8.42833 22.6148 7.47124 22.3726L7.28081 22.3169C5.66957 21.7795 4.95953 19.8955 5.81499 18.4282L7.398 15.7153H4.00054C2.14716 15.7151 0.736263 14.0504 1.04057 12.2222L2.09526 5.89307C2.49714 3.48238 4.58395 1.71458 7.02788 1.71436H11.9136Z",
    fill: "#000"
  }));
});
Dislike.displayName = 'Dislike';