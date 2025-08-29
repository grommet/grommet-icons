"use strict";

exports.__esModule = true;
exports.Steps = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Steps = exports.Steps = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Steps"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 17.7881C5.686e-05 16.46 0.528484 15.186 1.46875 14.248L14.2881 1.45996C15.2254 0.524955 16.4954 4.02189e-05 17.8193 0H24V2H17.8193C17.0251 2.00004 16.2635 2.31515 15.7012 2.87598L2.88086 15.6641C2.31674 16.2268 2.00006 16.9913 2 17.7881V24H0V17.7881Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.44485 21.1031C6.44485 19.9985 7.34028 19.1031 8.44485 19.1031H12.4449V15.1031C12.4449 13.9985 13.3403 13.1031 14.4449 13.1031H18.4449V9.10306C18.4449 7.99849 19.3403 7.10306 20.4449 7.10306H23.9995V9.10306H20.4449V14.1031C20.4449 14.6553 19.9971 15.1031 19.4449 15.1031H14.4449V20.1031C14.4449 20.6553 13.9971 21.1031 13.4449 21.1031H8.44485V23.9995H6.44485V21.1031Z",
    fill: "#000"
  }));
});
Steps.displayName = 'Steps';