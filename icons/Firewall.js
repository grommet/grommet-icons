"use strict";

exports.__esModule = true;
exports.Firewall = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Firewall = exports.Firewall = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Firewall"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.006 2.02a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6zm5.916 2.976a1.1 1.1 0 0 0-1.1 1.1v1.8a1.1 1.1 0 0 0 1.1 1.1h5.8a1.1 1.1 0 0 0 1.1-1.1v-1.8a1.1 1.1 0 0 0-1.1-1.1h-5.8zm-8.822 0a1.1 1.1 0 0 0-1.1 1.1v1.8a1.1 1.1 0 0 0 1.1 1.1h5.8a1.1 1.1 0 0 0 1.1-1.1v-1.8a1.1 1.1 0 0 0-1.1-1.1H3.1zm0 9.992a1.1 1.1 0 0 0-1.1 1.1v1.8a1.1 1.1 0 0 0 1.1 1.1h5.8a1.1 1.1 0 0 0 1.1-1.1v-1.8a1.1 1.1 0 0 0-1.1-1.1H3.1zm7.723 1.1a1.1 1.1 0 0 1 1.1-1.1h5.8a1.1 1.1 0 0 1 1.1 1.1v1.8a1.1 1.1 0 0 1-1.1 1.1h-5.8a1.1 1.1 0 0 1-1.1-1.1v-1.8zm-5.975-5.015a1.1 1.1 0 0 1 1.1-1.1h5.8a1.1 1.1 0 0 1 1.1 1.1v1.8a1.1 1.1 0 0 1-1.1 1.1h-5.8a1.1 1.1 0 0 1-1.1-1.1v-1.8zm9.866-1.061a1.1 1.1 0 0 0-1.1 1.1v1.8a1.1 1.1 0 0 0 1.1 1.1h5.8a1.1 1.1 0 0 0 1.1-1.1v-1.8a1.1 1.1 0 0 0-1.1-1.1h-5.8zM14 3.019a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1zm1 16.962a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-6zm-9.988 1a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1zM3 9.973a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1zm16.63-3.977a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2zm1.015 8.992a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1zM2 20.981a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM3.011 2.019a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
    fill: "#000"
  }));
});
Firewall.displayName = 'Firewall';