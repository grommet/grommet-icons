"use strict";

exports.__esModule = true;
exports.Favorite = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Favorite = exports.Favorite = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Favorite"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.91517 4.3618C4.54679 1.78078 8.53055 1.83765 11.0656 4.41355L11.297 4.66062C11.5633 4.9581 11.7973 5.27311 12.0021 5.60008C12.2644 5.18118 12.5765 4.7825 12.9396 4.41355L13.1818 4.18016C15.7244 1.8367 19.5506 1.87435 22.0636 4.4282L22.298 4.6782C24.5677 7.21534 24.5675 10.8675 22.298 13.4048L22.0636 13.6548L22.006 13.7124C21.9687 13.7503 21.9141 13.807 21.8429 13.8794C21.7005 14.0241 21.4937 14.2342 21.2365 14.4956C20.722 15.0184 20.0051 15.746 19.1974 16.5669C17.582 18.2086 15.6014 20.2221 14.1398 21.7075C12.9643 22.9021 11.0422 22.9014 9.86537 21.7114C8.39994 20.2296 6.40979 18.2232 4.78627 16.5864C3.97463 15.7681 3.25461 15.0421 2.73744 14.521C2.47905 14.2606 2.27126 14.051 2.12806 13.9067C2.05649 13.8346 2.00056 13.7785 1.96303 13.7407L1.90638 13.6841C1.90127 13.6789 1.89576 13.6727 1.89076 13.6675C-0.63099 11.0121 -0.632766 6.95127 1.90248 4.37449L1.91517 4.3618ZM9.63978 5.81687C7.88199 4.03064 5.16672 3.97907 3.32142 5.7827C1.56866 7.57061 1.54404 10.3963 3.33998 12.2886L3.38295 12.3315C3.42049 12.3693 3.47553 12.4255 3.54701 12.4975C3.69025 12.6418 3.89874 12.8512 4.15736 13.1118C4.67458 13.633 5.39449 14.3589 6.20619 15.1772C7.82979 16.8141 9.82064 18.8221 11.2872 20.3052C11.6815 20.7038 12.3224 20.7032 12.714 20.3052C14.1756 18.8198 16.1561 16.8063 17.7716 15.1645C18.5794 14.3436 19.2962 13.6151 19.8107 13.0923C20.0678 12.831 20.2747 12.6208 20.4171 12.4761C20.4882 12.4038 20.5439 12.3479 20.5812 12.31C20.5997 12.2913 20.6137 12.2767 20.6232 12.2671L20.6378 12.2524L20.8029 12.0766C22.3993 10.2959 22.3992 7.78807 20.8029 6.0073L20.6378 5.83152C18.8892 4.0545 16.2917 4.02961 14.5324 5.65477L14.3654 5.81687C13.4547 6.74239 13.0055 7.88568 13.0021 9.04441C13.0005 9.59553 12.5532 10.0414 12.0021 10.0415C11.4511 10.0412 11.0037 9.59541 11.0021 9.04441C10.9988 7.95808 10.6053 6.88506 9.8058 5.99266L9.63978 5.81687Z",
    fill: "#000"
  }));
});
Favorite.displayName = 'Favorite';