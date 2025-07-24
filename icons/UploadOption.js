"use strict";

exports.__esModule = true;
exports.UploadOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var UploadOption = exports.UploadOption = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "UploadOption"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14.792 11.793C15.1825 11.4025 15.8165 11.4026 16.2071 11.793C18.5303 14.1164 18.5303 17.8836 16.2071 20.207C13.8835 22.5303 10.1155 22.5305 7.79204 20.207C5.46914 17.8836 5.46914 14.1164 7.79204 11.793C8.1825 11.4025 8.81654 11.4026 9.20708 11.793C9.5973 12.1834 9.5973 12.8166 9.20708 13.207C7.66488 14.7495 7.66488 17.2505 9.20708 18.793C10.7494 20.3351 13.2496 20.3349 14.792 18.793C16.3345 17.2505 16.3345 14.7495 14.792 13.207C14.4021 12.8166 14.4021 12.1834 14.792 11.793Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 2C12.232 2.0001 12.456 2.08081 12.6338 2.22656L12.7071 2.29297L16.7071 6.29297C17.0973 6.68344 17.0973 7.31656 16.7071 7.70703C16.3165 8.09735 15.6825 8.09749 15.292 7.70703L13 5.41504V16C13 16.5521 12.5521 16.9998 12 17C11.4479 16.9998 11 16.5521 11 16V5.41406L8.70708 7.70703C8.31654 8.09735 7.6825 8.09749 7.29204 7.70703C6.90214 7.31663 6.90214 6.68338 7.29204 6.29297L11.292 2.29297C11.4795 2.10553 11.735 2.00011 12 2Z",
    fill: "#000"
  }));
});
UploadOption.displayName = 'UploadOption';