"use strict";

exports.__esModule = true;
exports.Duplicate = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Duplicate = exports.Duplicate = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Duplicate"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16 14H18V16H16V18H14V16H12V14H14V12H16V14Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 0C15.7614 0 18 2.23858 18 5V6H19C21.7614 6 24 8.23858 24 11V19C24 21.7614 21.7614 24 19 24H11C8.23858 24 6 21.7614 6 19V18H5C2.23858 18 0 15.7614 0 13V5C0 2.23858 2.23858 0 5 0H13ZM11 8C9.34315 8 8 9.34315 8 11V19C8 20.6569 9.34315 22 11 22H19C20.6569 22 22 20.6569 22 19V11C22 9.34315 20.6569 8 19 8H11ZM5 2C3.34315 2 2 3.34315 2 5V13C2 14.6569 3.34315 16 5 16H6V11C6 8.23858 8.23858 6 11 6H16V5C16 3.34315 14.6569 2 13 2H5Z",
    fill: "#000"
  }));
});
Duplicate.displayName = 'Duplicate';