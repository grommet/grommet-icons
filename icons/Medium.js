"use strict";

exports.__esModule = true;
exports.Medium = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Medium = exports.Medium = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Medium"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.783 5.00001C6.88538 4.98911 5.99452 5.1565 5.16207 5.49246C4.32963 5.82842 3.57214 6.32628 2.93354 6.95718C2.29494 7.58807 1.78792 8.33945 1.44187 9.16776C1.09583 9.99607 0.917641 10.8848 0.917641 11.7825C0.917641 12.6802 1.09583 13.569 1.44187 14.3973C1.78792 15.2256 2.29494 15.977 2.93354 16.6078C3.57214 17.2387 4.32963 17.7366 5.16207 18.0726C5.99452 18.4085 6.88538 18.5759 7.783 18.565C9.56756 18.5433 11.2717 17.8192 12.526 16.5496C13.7803 15.28 14.4836 13.5672 14.4836 11.7825C14.4836 9.99781 13.7803 8.28502 12.526 7.01541C11.2717 5.7458 9.56756 5.02168 7.783 5.00001ZM18.478 5.52201C16.605 5.52201 15.087 8.32501 15.087 11.782C15.087 12.432 15.14 13.056 15.239 13.644C15.371 14.428 15.585 15.146 15.861 15.765C15.999 16.075 16.153 16.359 16.321 16.614C16.656 17.124 17.045 17.518 17.47 17.762C17.789 17.945 18.127 18.044 18.478 18.044C18.829 18.044 19.168 17.944 19.487 17.762C19.912 17.518 20.301 17.124 20.636 16.614C20.803 16.359 20.957 16.074 21.096 15.765C21.372 15.147 21.586 14.428 21.717 13.645C21.817 13.056 21.87 12.431 21.87 11.783C21.87 8.32501 20.351 5.52201 18.478 5.52201ZM23.696 6.04301C23.56 6.04301 23.43 6.13301 23.308 6.30201C23.226 6.41301 23.148 6.55901 23.074 6.73601C23.0347 6.83061 22.999 6.92668 22.967 7.02401C22.897 7.23001 22.833 7.46501 22.774 7.72401C22.656 8.24401 22.56 8.86201 22.494 9.54901C22.4228 10.2915 22.3885 11.0371 22.391 11.783C22.3913 12.5289 22.4257 13.2743 22.494 14.017C22.56 14.703 22.656 15.322 22.774 15.841C22.833 16.101 22.897 16.336 22.967 16.541C23.001 16.645 23.037 16.741 23.074 16.829C23.148 17.006 23.227 17.152 23.308 17.264C23.43 17.432 23.561 17.522 23.696 17.522C24.416 17.522 25 14.952 25 11.782C25 8.61301 24.416 6.04301 23.696 6.04301Z",
    fill: "black"
  }));
});
Medium.displayName = 'Medium';