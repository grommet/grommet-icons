"use strict";

exports.__esModule = true;
exports.InstallOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var InstallOption = exports.InstallOption = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "InstallOption"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16.9499 6.63574C17.3404 6.24564 17.9736 6.24548 18.364 6.63574C21.8787 10.1505 21.8787 15.8495 18.364 19.3643C14.8493 22.8788 9.15014 22.8789 5.63547 19.3643C2.12094 15.8496 2.12094 10.1504 5.63547 6.63574C6.02582 6.24539 6.65896 6.24573 7.04953 6.63574C7.44005 7.02627 7.44005 7.65928 7.04953 8.0498C4.31605 10.7834 4.31605 15.2166 7.04953 17.9502C9.78315 20.6838 14.2162 20.6837 16.9499 17.9502C19.6836 15.2165 19.6836 10.7835 16.9499 8.0498C16.5596 7.65932 16.5596 7.02623 16.9499 6.63574Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.9997 2C12.552 2 12.9997 2.44772 12.9997 3V13.5859L15.2927 11.293C15.6832 10.9025 16.3162 10.9026 16.7068 11.293C17.0973 11.6835 17.0973 12.3165 16.7068 12.707L12.7068 16.707C12.3162 17.0974 11.6832 17.0975 11.2927 16.707L7.29269 12.707C6.90236 12.3165 6.90236 11.6835 7.29269 11.293C7.68317 10.9025 8.31622 10.9026 8.70676 11.293L10.9997 13.5859V3C10.9997 2.44781 11.4476 2.00015 11.9997 2Z",
    fill: "#000"
  }));
});
InstallOption.displayName = 'InstallOption';