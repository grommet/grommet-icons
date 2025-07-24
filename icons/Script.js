"use strict";

exports.__esModule = true;
exports.Script = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Script = exports.Script = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Script"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.9997 1C18.2088 1 19.9997 2.79086 19.9997 5V5.07129L19.9899 5.1416L18.153 18H21.9997C22.5447 18 23.0737 18.2249 23.4352 18.626C23.8146 19.047 24.0027 19.6673 23.7809 20.3086C23.2391 21.8735 21.7518 23 19.9997 23H7.99966C5.79066 22.9998 3.99966 21.209 3.99966 19V18.9287L4.0104 18.8584L5.84731 6H1.99966C1.45476 5.99991 0.925524 5.77499 0.56411 5.37402C0.184844 4.95303 -0.00241461 4.33254 0.219383 3.69141L0.331688 3.40234C0.947898 1.98946 2.35725 1.00013 3.99966 1H15.9997ZM7.46352 3C7.80407 3.58847 7.99966 4.27119 7.99966 5V5.07129L7.98989 5.1416L6.00161 19.0527C6.02958 20.1328 6.91287 20.9998 7.99966 21C8.87341 21 9.61872 20.4387 9.89028 19.6543C10.1434 18.9235 10.8475 18.0002 11.9997 18H16.1334L17.9967 4.9502C17.9703 3.86867 17.0876 3 15.9997 3H7.46352ZM12.0036 20C12.0147 19.9988 11.9975 19.9932 11.9489 20.0371C11.8902 20.0901 11.8235 20.1858 11.7809 20.3086C11.6971 20.5507 11.5881 20.7815 11.4616 21H19.9997C20.7386 21 21.3847 20.5982 21.7311 20H12.0036ZM3.99966 3C3.26095 3.00012 2.61553 3.402 2.26919 4H5.73013C5.38418 3.40275 4.73953 3 3.99966 3Z",
    fill: "#000"
  }));
});
Script.displayName = 'Script';