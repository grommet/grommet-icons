"use strict";

exports.__esModule = true;
exports.GenAIFill = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var GenAIFill = exports.GenAIFill = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "GenAIFill"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18.8974 12.8573C19.7935 13.0789 19.7935 14.3527 18.8974 14.5743C15.0741 15.5198 12.0888 18.5051 11.1433 22.3284C10.9217 23.2245 9.64788 23.2245 9.42628 22.3284C8.48072 18.5051 5.49548 15.5198 1.67211 14.5743C0.776046 14.3527 0.776046 13.0789 1.67211 12.8573C5.49548 11.9117 8.48073 8.92648 9.42628 5.1031C9.64788 4.20704 10.9217 4.20704 11.1433 5.1031C12.0888 8.92647 15.0741 11.9117 18.8974 12.8573Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M22.6759 5.0945C23.1079 5.18994 23.1079 5.8058 22.6759 5.90125C20.7923 6.31744 19.3212 7.78858 18.905 9.67223C18.8095 10.1042 18.1937 10.1042 18.0982 9.67223C17.682 7.78858 16.2109 6.31743 14.3272 5.90125C13.8953 5.8058 13.8953 5.18994 14.3272 5.0945C16.2109 4.67831 17.682 3.20717 18.0982 1.32352C18.1937 0.89155 18.8095 0.89155 18.905 1.32352C19.3212 3.20717 20.7923 4.67831 22.6759 5.0945Z",
    fill: "#000"
  }));
});
GenAIFill.displayName = 'GenAIFill';