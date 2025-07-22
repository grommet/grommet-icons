"use strict";

exports.__esModule = true;
exports.Car = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Car = exports.Car = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Car"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 10.997c0-.55.44-.997 1.002-.997h19.996c.553 0 1.002.453 1.002.997v6.006c0 .55-.44.997-1.002.997H2.002A1.004 1.004 0 0 1 1 17.003v-6.006zM6 2h12l4 8H2l4-8zm6 8.5L15 5M3 18h3v2.99c0 .558-.443 1.01-.999 1.01H3.999A.999.999 0 0 1 3 20.99V18zm15 0h3v2.99c0 .558-.443 1.01-.999 1.01h-1.002A.999.999 0 0 1 18 20.99V18zM5 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm14 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-7-2v2m2-2v2m-4-2v2"
  }));
});
Car.displayName = 'Car';