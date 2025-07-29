"use strict";

exports.__esModule = true;
exports.Oracle = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Oracle = exports.Oracle = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Oracle"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.95736 18.9124C4.1167 18.9124 1 15.8035 1 11.9617C1 8.12001 4.1167 5 7.95736 5H16.0438C19.8855 5 23 8.12001 23 11.9617C23 15.8035 19.8855 18.9124 16.0438 18.9124H7.95736ZM15.8639 16.4585C18.3522 16.4585 20.3674 14.4489 20.3674 11.9617C20.3674 9.47461 18.3522 7.45382 15.8639 7.45382H8.13608C5.64895 7.45382 3.63256 9.47461 3.63256 11.9617C3.63256 14.4489 5.64895 16.4585 8.13608 16.4585H15.8639Z",
    fill: "#FF0000"
  }));
});
Oracle.displayName = 'Oracle';