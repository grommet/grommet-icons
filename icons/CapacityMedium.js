"use strict";

exports.__esModule = true;
exports.CapacityMedium = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var CapacityMedium = exports.CapacityMedium = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "CapacityMedium"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10 8C11.1046 8 12 8.89543 12 10V14C12 15.1046 11.1046 16 10 16H7C5.89543 16 5 15.1046 5 14V10C5 8.89543 5.89543 8 7 8H10Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 4C19.7614 4 22 6.23858 22 9C23.1046 9 24 9.89543 24 11V13C24 14.1046 23.1046 15 22 15C22 17.7614 19.7614 20 17 20H6C3.23858 20 1 17.7614 1 15V9C1 6.23858 3.23858 4 6 4H17ZM6 6C4.34315 6 3 7.34315 3 9V15C3 16.6569 4.34315 18 6 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6H6Z",
    fill: "#000"
  }));
});
CapacityMedium.displayName = 'CapacityMedium';