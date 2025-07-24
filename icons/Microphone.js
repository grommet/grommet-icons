"use strict";

exports.__esModule = true;
exports.Microphone = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Microphone = exports.Microphone = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Microphone"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M20 8.27686C20.5523 8.27686 21 8.72457 21 9.27686V11.2769C21 14.0281 20.0079 16.2976 18.3457 17.8765C16.9203 19.2302 15.0481 20.0308 13 20.2271V22.2769C13 22.8291 12.5523 23.2769 12 23.2769C11.4477 23.2769 11 22.8291 11 22.2769V20.2271C8.95187 20.0308 7.07965 19.2302 5.6543 17.8765C3.99208 16.2976 3 14.0281 3 11.2769V9.27686C3 8.72457 3.44772 8.27686 4 8.27686C4.55228 8.27686 5 8.72457 5 9.27686V11.2769C5 13.5255 5.79922 15.2562 7.03223 16.4272C8.27315 17.6056 10.017 18.2769 12 18.2769C13.983 18.2769 15.7268 17.6056 16.9678 16.4272C18.2008 15.2562 19 13.5255 19 11.2769V9.27686C19 8.72457 19.4477 8.27686 20 8.27686Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1.27686C13.2207 1.27686 14.482 1.52971 15.4541 2.30908C16.4667 3.12094 16.9999 4.36843 17 5.99072V11.563C16.9999 13.1853 16.4667 14.4328 15.4541 15.2446C14.482 16.024 13.2207 16.2769 12 16.2769C10.7793 16.2769 9.51798 16.024 8.5459 15.2446C7.53334 14.4328 7.00009 13.1853 7 11.563V5.99072C7.00009 4.36843 7.53334 3.12094 8.5459 2.30908C9.51798 1.52971 10.7793 1.27686 12 1.27686ZM12 3.27686C11.0116 3.27686 10.2725 3.48829 9.79688 3.86963C9.36197 4.2184 9.00009 4.82796 9 5.99072V11.563C9.00009 12.7258 9.36197 13.3353 9.79688 13.6841C10.2725 14.0654 11.0116 14.2769 12 14.2769C12.9884 14.2769 13.7275 14.0654 14.2031 13.6841C14.638 13.3353 14.9999 12.7258 15 11.563V5.99072C14.9999 4.82796 14.638 4.2184 14.2031 3.86963C13.7275 3.48829 12.9884 3.27686 12 3.27686Z",
    fill: "#000"
  }));
});
Microphone.displayName = 'Microphone';