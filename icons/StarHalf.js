"use strict";

exports.__esModule = true;
exports.StarHalf = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var StarHalf = exports.StarHalf = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "StarHalf"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 1.45361C12.4303 1.45361 12.812 1.72903 12.9482 2.13721L15.2207 8.95361H22C22.4303 8.95361 22.812 9.22903 22.9482 9.63721C23.0844 10.0455 22.944 10.4952 22.5996 10.7534L17.1992 14.8032L19.9365 22.1021C20.093 22.5193 19.9543 22.9905 19.5967 23.2563C19.239 23.5222 18.748 23.5196 18.3936 23.2495L12 18.3784L5.60644 23.2495C5.25195 23.5196 4.76098 23.5222 4.40332 23.2563C4.04565 22.9905 3.90699 22.5193 4.06347 22.1021L6.7998 14.8032L1.40039 10.7534C1.05604 10.4952 0.915641 10.0455 1.05176 9.63721C1.18795 9.22903 1.56967 8.95361 2 8.95361H8.77929L11.0518 2.13721L11.1133 1.99072C11.2835 1.66441 11.6233 1.45361 12 1.45361ZM12.5 16.6245L16.8437 19.5522L15.0635 14.8052C14.9075 14.3894 15.0451 13.9203 15.4004 13.6538L19.001 10.9536H14.5C14.0697 10.9536 13.688 10.6782 13.5518 10.27L12.5 7.11361V16.6245Z",
    fill: "#000"
  }));
});
StarHalf.displayName = 'StarHalf';