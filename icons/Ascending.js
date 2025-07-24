"use strict";

exports.__esModule = true;
exports.Ascending = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Ascending = exports.Ascending = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Ascending"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M17.507 8.09277C17.8973 8.48326 17.8973 9.11634 17.507 9.50684C17.1165 9.89721 16.4834 9.89718 16.0929 9.50684L13.0001 6.41406V20C13.0001 20.5522 12.5523 20.9998 12.0001 21C11.448 20.9998 11.0001 20.5522 11.0001 20V6.41406L7.90734 9.50684C7.51687 9.89732 6.88382 9.89721 6.49328 9.50684C6.10286 9.11631 6.10279 8.48327 6.49328 8.09277L12.0001 2.58594L17.507 8.09277Z",
    fill: "#000"
  }));
});
Ascending.displayName = 'Ascending';