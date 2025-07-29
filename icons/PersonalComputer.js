"use strict";

exports.__esModule = true;
exports.PersonalComputer = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var PersonalComputer = exports.PersonalComputer = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "PersonalComputer"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.9991 2C20.1037 2 20.9991 2.89543 20.9991 4V14.7637L23.17 19.1055L23.2276 19.2305C23.7744 20.5312 22.8222 21.9997 21.3819 22H2.61728C1.13101 21.9995 0.164574 20.435 0.82919 19.1055L2.99911 14.7656V4C2.99911 2.89573 3.89495 2.00048 4.99911 2H18.9991ZM2.61728 20H8.99911C8.99911 19.448 9.44723 19.0005 9.99911 19H13.9991L14.1017 19.0049C14.606 19.056 14.9991 19.4822 14.9991 20H21.3819L19.3819 16H4.61728L2.61728 20ZM4.99911 14H18.9991V4H4.99911V14Z",
    fill: "#000"
  }));
});
PersonalComputer.displayName = 'PersonalComputer';