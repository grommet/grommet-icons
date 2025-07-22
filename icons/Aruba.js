"use strict";

exports.__esModule = true;
exports.Aruba = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Aruba = exports.Aruba = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Aruba"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#FF8300",
    fillRule: "evenodd",
    d: "M12.11 17.302c-3.074 0-5.602-2.46-5.602-5.465 0-3.006 2.528-5.465 5.602-5.465 3.074 0 5.601 2.46 5.601 5.465s-2.527 5.465-5.601 5.465zM12.11 2C6.508 2 2 6.44 2 11.837c0 5.465 4.508 9.836 10.11 9.836 2.323 0 4.44-.751 6.148-2.049 1.025 1.708 3.962 2.05 3.962 2.05v-9.837C22.22 6.44 17.71 2 12.11 2z"
  }));
});
Aruba.displayName = 'Aruba';