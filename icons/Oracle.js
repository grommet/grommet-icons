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
    fill: "red",
    fillRule: "evenodd",
    d: "M7.957 18.912A6.953 6.953 0 0 1 1 11.962 6.963 6.963 0 0 1 7.957 5h8.087A6.961 6.961 0 0 1 23 11.962a6.952 6.952 0 0 1-6.956 6.95H7.957zm7.907-2.453a4.497 4.497 0 0 0 4.503-4.497 4.507 4.507 0 0 0-4.503-4.508H8.136a4.507 4.507 0 0 0-4.503 4.508 4.498 4.498 0 0 0 4.503 4.497h7.728z"
  }));
});
Oracle.displayName = 'Oracle';