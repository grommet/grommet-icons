"use strict";

exports.__esModule = true;
exports.Reddit = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Reddit = exports.Reddit = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Reddit"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.57 15.284C14.673 15.284 13.9192 14.5565 13.9192 13.6595C13.9192 12.7625 14.673 12.011 15.57 12.011C16.467 12.011 17.1945 12.7625 17.1945 13.6595C17.1945 14.5565 16.467 15.284 15.57 15.284ZM15.951 18.437C15.1155 19.2717 13.827 19.6775 12.012 19.6775C12.0083 19.6775 12.0038 19.6768 11.9993 19.6768C11.9955 19.6768 11.991 19.6775 11.9865 19.6775C10.1715 19.6775 8.88375 19.2717 8.049 18.437C7.7925 18.1805 7.7925 17.7657 8.049 17.51C8.30475 17.2543 8.7195 17.2543 8.976 17.51C9.552 18.086 10.5367 18.3665 11.9865 18.3665C11.991 18.3665 11.9955 18.3673 11.9993 18.3673C12.0038 18.3673 12.0083 18.3665 12.012 18.3665C13.4618 18.3665 14.4473 18.086 15.024 17.51C15.2805 17.2535 15.6953 17.2543 15.951 17.51C16.2068 17.7665 16.2068 18.1812 15.951 18.437ZM6.8055 13.6595C6.8055 12.7633 7.55775 12.011 8.454 12.011C9.351 12.011 10.0785 12.7633 10.0785 13.6595C10.0785 14.5565 9.351 15.284 8.454 15.284C7.55775 15.284 6.8055 14.5565 6.8055 13.6595ZM19.998 3.311C20.6055 3.311 21.0998 3.80525 21.0998 4.412C21.0998 5.0195 20.6055 5.51375 19.998 5.51375C19.3905 5.51375 18.8962 5.0195 18.8962 4.412C18.8962 3.80525 19.3905 3.311 19.998 3.311ZM24 11.8752C24 10.2845 22.7062 8.99075 21.1155 8.99075C20.427 8.99075 19.7948 9.23375 19.2983 9.638C17.5395 8.5325 15.3075 7.8665 12.915 7.7255L14.163 3.77975L17.5928 4.5875C17.6828 5.83625 18.7267 6.82475 19.998 6.82475C21.3277 6.82475 22.41 5.7425 22.41 4.412C22.41 3.08225 21.3277 2 19.998 2C19.068 2 18.2595 2.5295 17.8568 3.30275L13.8713 2.3645C13.5375 2.28575 13.2 2.47775 13.0965 2.80475L11.547 7.70225C8.96925 7.76525 6.546 8.4335 4.65825 9.6035C4.1685 9.22025 3.55275 8.99075 2.8845 8.99075C1.29375 8.99075 0 10.2845 0 11.8752C0 12.8585 0.495 13.7277 1.24875 14.2483C1.21725 14.477 1.20075 14.7073 1.20075 14.9405C1.20075 16.9288 2.3565 18.7783 4.455 20.1478C6.4665 21.461 9.129 22.184 11.9513 22.184C14.7735 22.184 17.436 21.461 19.4475 20.1478C21.546 18.7783 22.7017 16.9288 22.7017 14.9405C22.7017 14.7283 22.6875 14.5175 22.6612 14.3083C23.4653 13.796 24 12.8967 24 11.8752Z",
    fill: "#FF4500"
  }));
});
Reddit.displayName = 'Reddit';