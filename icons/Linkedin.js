"use strict";

exports.__esModule = true;
exports.Linkedin = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Linkedin = exports.Linkedin = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Linkedin"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.4517 20.4503H16.8923V14.8807C16.8923 13.5525 16.8698 11.844 15.0428 11.844C13.191 11.844 12.9082 13.2915 12.9082 14.7855V20.4503H9.3525V8.997H12.765V10.563H12.8138C13.2885 9.66225 14.4495 8.71275 16.1812 8.71275C19.7857 8.71275 20.4517 11.0842 20.4517 14.169V20.4503ZM5.33925 7.4325C4.1955 7.4325 3.27375 6.50775 3.27375 5.36775C3.27375 4.2285 4.1955 3.30375 5.33925 3.30375C6.47775 3.30375 7.4025 4.2285 7.4025 5.36775C7.4025 6.50775 6.47775 7.4325 5.33925 7.4325ZM7.11975 20.4503H3.5565V8.997H7.11975V20.4503ZM23.0002 0H1.0005C0.44775 0 0 0.44775 0 0.99975V22.9995C0 23.5522 0.44775 24 1.0005 24H23.0002C23.5522 24 24 23.5522 24 22.9995V0.99975C24 0.44775 23.5522 0 23.0002 0Z",
    fill: "#0077B5"
  }));
});
Linkedin.displayName = 'Linkedin';