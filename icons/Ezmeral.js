"use strict";

exports.__esModule = true;
exports.Ezmeral = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Ezmeral = exports.Ezmeral = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Ezmeral"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 9.91306H3.13043V14.087H0V9.91306Z",
    fill: "#00775B"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M20.8696 9.91306H24V14.087H20.8696V9.91306Z",
    fill: "#00775B"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3.13043 14.087H20.8696L20.8696 17.2174H3.13043V14.087Z",
    fill: "#00775B"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3.13043 6.78262H20.8696L20.8696 9.91306H3.13043L3.13043 6.78262Z",
    fill: "#00C781"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3.13043 9.91306H20.8696V14.087H3.13043V9.91306Z",
    fill: "#01A982"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 9.91306L3.13043 6.78262L3.13043 9.91306H0Z",
    fill: "#01A982"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 14.087L3.13043 17.2174V14.087H0Z",
    fill: "#01A982"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M24 9.91306L20.8696 6.78262L20.8696 9.91306H24Z",
    fill: "#01A982"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M24 14.087L20.8696 17.2174L20.8696 14.087H24Z",
    fill: "#01A982"
  }));
});
Ezmeral.displayName = 'Ezmeral';