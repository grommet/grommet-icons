"use strict";

exports.__esModule = true;
exports.Fedora = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Fedora = exports.Fedora = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Fedora"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#4F6DB1",
    fillRule: "evenodd",
    d: "M12 0C5.375 0 .005 5.368 0 11.992v9.286A2.728 2.728 0 0 0 2.728 24h9.277C18.63 23.997 24 18.626 24 12c0-6.627-5.373-12-12-12zm4.595 5.577c-.379 0-.517-.073-1.072-.073a2.973 2.973 0 0 0-2.973 2.968v2.583a.42.42 0 0 0 .42.419h1.953c.728 0 1.316.58 1.316 1.31 0 .734-.594 1.312-1.33 1.312H12.55v2.985a5.632 5.632 0 0 1-5.631 5.632c-.472 0-.808-.053-1.245-.167-.637-.167-1.157-.689-1.157-1.296 0-.734.533-1.269 1.33-1.269.378 0 .516.073 1.072.073 1.64 0 2.97-1.328 2.972-2.968v-2.583a.42.42 0 0 0-.42-.419H7.518c-.727 0-1.315-.58-1.315-1.31 0-.735.594-1.312 1.33-1.312H9.89V8.476a5.632 5.632 0 0 1 5.632-5.632c.472 0 .807.054 1.244.168.637.167 1.158.689 1.158 1.296 0 .734-.533 1.269-1.33 1.269z"
  }));
});
Fedora.displayName = 'Fedora';