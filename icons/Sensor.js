"use strict";

exports.__esModule = true;
exports.Sensor = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Sensor = exports.Sensor = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Sensor"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4.22164 4.29333C4.61212 3.90284 5.24517 3.90291 5.6357 4.29333C6.02621 4.68385 6.02622 5.31687 5.6357 5.70739C2.12136 9.222 2.12144 14.9203 5.6357 18.4349C6.02621 18.8255 6.02622 19.4594 5.6357 19.85C5.24518 20.24 4.61201 20.2402 4.22164 19.85C-0.0740454 15.5543 -0.0738752 8.58911 4.22164 4.29333Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18.3642 4.29333C18.7547 3.90291 19.3878 3.90284 19.7783 4.29333C24.0739 8.5891 24.074 15.5542 19.7783 19.85C19.3878 20.2401 18.7547 20.2401 18.3642 19.85C17.9737 19.4595 17.9738 18.8255 18.3642 18.4349C21.8785 14.9202 21.8787 9.22199 18.3642 5.70739C17.9737 5.31691 17.9738 4.68386 18.3642 4.29333Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.04976 7.12145C7.44029 6.73093 8.07428 6.73093 8.4648 7.12145C8.8551 7.51187 8.85494 8.145 8.4648 8.53551C6.51232 10.4881 6.51223 13.6542 8.4648 15.6068C8.85507 15.9972 8.85496 16.6304 8.4648 17.0209C8.07427 17.4112 7.44024 17.4113 7.04976 17.0209C4.31653 14.2873 4.31649 9.85503 7.04976 7.12145Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.5351 7.12145C15.9256 6.73093 16.5596 6.73093 16.9502 7.12145C19.6836 9.85502 19.6834 14.2872 16.9502 17.0209C16.5596 17.4112 15.9256 17.4113 15.5351 17.0209C15.145 16.6304 15.145 15.9972 15.5351 15.6068C17.4877 13.6542 17.4877 10.4881 15.5351 8.53551C15.145 8.14504 15.145 7.51188 15.5351 7.12145Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 9.07165C13.6568 9.07165 15 10.4148 15 12.0716C14.9997 13.7283 13.6567 15.0716 12 15.0716C10.3433 15.0716 9.00017 13.7283 8.99996 12.0716C8.99996 10.4148 10.3432 9.07172 12 9.07165ZM12 11.0716C11.4477 11.0717 11 11.5194 11 12.0716C11.0002 12.6237 11.4479 13.0716 12 13.0716C12.5521 13.0716 12.9997 12.6237 13 12.0716C13 11.5194 12.5522 11.0716 12 11.0716Z",
    fill: "#000"
  }));
});
Sensor.displayName = 'Sensor';