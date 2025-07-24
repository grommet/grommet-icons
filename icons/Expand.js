"use strict";

exports.__esModule = true;
exports.Expand = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Expand = exports.Expand = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Expand"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M9.29297 13.293C9.68349 12.9024 10.3165 12.9024 10.707 13.293C11.0976 13.6835 11.0976 14.3165 10.707 14.707L4.41406 21H8C8.55228 21 9 21.4477 9 22C9 22.5523 8.55228 23 8 23H2C1.73478 23 1.48051 22.8946 1.29297 22.707C1.10543 22.5195 1 22.2652 1 22V16C1 15.4477 1.44772 15 2 15C2.55228 15 3 15.4477 3 16V19.5859L9.29297 13.293Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M22 1C22.5523 1 23 1.44772 23 2V8C23 8.55228 22.5523 9 22 9C21.4477 9 21 8.55228 21 8V4.41406L14.707 10.707C14.3165 11.0976 13.6835 11.0976 13.293 10.707C12.9024 10.3165 12.9024 9.68349 13.293 9.29297L19.5859 3H16C15.4477 3 15 2.55228 15 2C15 1.44772 15.4477 1 16 1H22Z",
    fill: "#000"
  }));
});
Expand.displayName = 'Expand';