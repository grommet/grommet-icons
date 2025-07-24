"use strict";

exports.__esModule = true;
exports.Dropbox = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Dropbox = exports.Dropbox = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Dropbox"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#007EE5",
    fillRule: "evenodd",
    d: "M7.0599,1 L0.00015,5.6095 L4.8819,9.5185 L12.00015,5.1235 L7.0599,1 Z M0,13.4281 L7.05975,18.0376 L12,13.9141 L4.88175,9.5191 L0,13.4281 Z M11.99985,13.914175 L16.9401,18.037675 L23.99985,13.428175 L19.1181,9.518425 L11.99985,13.914175 Z M24,5.609575 L16.94025,1.000075 L12,5.123575 L19.11825,9.518575 L24,5.609575 Z M12.014475,14.801275 L7.059975,18.912775 L4.939725,17.528275 L4.939725,19.080025 L12.014475,23.322775 L19.089225,19.080025 L19.089225,17.528275 L16.968975,18.912775 L12.014475,14.801275 Z"
  }));
});
Dropbox.displayName = 'Dropbox';