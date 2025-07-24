"use strict";

exports.__esModule = true;
exports.Up = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Up = exports.Up = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Up"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.3692 6.22486C11.762 5.90451 12.341 5.92711 12.7071 6.29322L22.7071 16.2932C23.0975 16.6838 23.0976 17.3168 22.7071 17.7073C22.3166 18.0977 21.6836 18.0976 21.2931 17.7073L12.0001 8.41432L2.70712 17.7073C2.31664 18.0977 1.68356 18.0976 1.29305 17.7073C0.902555 17.3168 0.902605 16.6838 1.29305 16.2932L11.2931 6.29322L11.3692 6.22486Z",
    fill: "#000"
  }));
});
Up.displayName = 'Up';