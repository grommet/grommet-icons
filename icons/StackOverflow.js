"use strict";

exports.__esModule = true;
exports.StackOverflow = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var StackOverflow = exports.StackOverflow = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "StackOverflow"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19.127 15.436H21.261V24H2V15.437H4.134V21.867H19.127V15.436Z",
    fill: "#BCBBBB"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.49 14.827L16.965 17.017L17.409 14.91L6.933 12.72L6.49 14.827ZM7.875 9.838L17.575 14.356L18.462 12.416L8.762 7.871L7.875 9.838ZM10.563 5.072L18.794 11.917L20.152 10.282L11.922 3.436L10.563 5.072ZM15.884 0L14.166 1.275L20.54 9.866L22.259 8.591L15.884 0ZM6.268 19.704H16.965V17.57H6.268V19.704Z",
    fill: "#F48023"
  }));
});
StackOverflow.displayName = 'StackOverflow';