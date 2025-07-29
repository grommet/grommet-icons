"use strict";

exports.__esModule = true;
exports.LogoGrommet = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var LogoGrommet = exports.LogoGrommet = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "LogoGrommet"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.38623 12C0.38623 5.38043 5.76666 0 12.3862 0C19.0058 0 24.3862 5.38043 24.3862 12C24.3862 18.6196 19.0058 24 12.3862 24C5.76666 24 0.38623 18.6196 0.38623 12ZM12.3862 4C7.9758 4 4.38623 7.58957 4.38623 12C4.38623 16.4104 7.9758 20 12.3862 20C16.7967 20 20.3862 16.4104 20.3862 12C20.3862 7.58957 16.7967 4 12.3862 4Z",
    fill: "#865CD6"
  }));
});
LogoGrommet.displayName = 'LogoGrommet';