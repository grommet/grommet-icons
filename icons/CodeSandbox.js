"use strict";

exports.__esModule = true;
exports.CodeSandbox = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var CodeSandbox = exports.CodeSandbox = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "CodeSandbox"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4 11.4111L7.98535 13.626L8.5 13.9111V19.4111L11 20.8008V12.0879L4 8.19922V11.4111ZM13 12.0879V20.8008L15.5 19.4111V13.9111L16.0146 13.626L20 11.4111V8.19922L13 12.0879ZM4 16.9111L6.5 18.3008V15.0879L4 13.6992V16.9111ZM17.5 15.0879V18.3008L20 16.9111V13.6992L17.5 15.0879ZM12 7.64355L7.5 5.14355L5.05859 6.5L12 10.3555L18.9414 6.5L16.5 5.14355L12 7.64355ZM9.55859 4L12 5.35547L14.4414 4L12 2.64355L9.55859 4ZM22 18.0889L21.4854 18.374L12 23.6436L2.51465 18.374L2 18.0889V5.91113L2.51465 5.62598L12 0.356445L18.5596 4L21.4854 5.62598L22 5.91113V18.0889Z",
    fill: "#444444"
  }));
});
CodeSandbox.displayName = 'CodeSandbox';