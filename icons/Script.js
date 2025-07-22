"use strict";

exports.__esModule = true;
exports.Script = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Script = exports.Script = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Script"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 1a4 4 0 0 0-4 4v1h5.847L4.01 18.859l-.01.07V19a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-1h-5.847L19.99 5.141l.01-.07V5a4 4 0 0 0-4-4H4zm0 2a2 2 0 0 0-1.732 1h3.464A2 2 0 0 0 4 3zm3.465 0H16a2 2 0 0 1 1.999 1.936L16.133 18H10v1a2 2 0 0 1-3.999.064L7.99 5.141l.01-.07V5c0-.729-.195-1.412-.535-2zM20 21h-8.535a3.97 3.97 0 0 0 .409-1h9.858A2 2 0 0 1 20 21z",
    fill: "#000"
  }));
});
Script.displayName = 'Script';