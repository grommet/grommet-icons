"use strict";

exports.__esModule = true;
exports.Aruba = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Aruba = exports.Aruba = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Aruba"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#FF8300",
    fillRule: "evenodd",
    d: "M12.1099561,17.3015551 C9.03598293,17.3015551 6.50849391,14.8423766 6.50849391,11.836714 C6.50849391,8.83105139 9.03598293,6.37187289 12.1099561,6.37187289 C15.1839292,6.37187289 17.7114182,8.83105139 17.7114182,11.836714 C17.7114182,14.8423766 15.1839292,17.3015551 12.1099561,17.3015551 L12.1099561,17.3015551 Z M12.1099561,2 C6.50849391,2 2,6.4401834 2,11.836714 C2,17.3015551 6.50849391,21.673428 12.1099561,21.673428 C14.4325135,21.673428 16.5501395,20.9220123 18.2579023,19.6241126 C19.28256,21.3318754 22.2199121,21.673428 22.2199121,21.673428 L22.2199121,11.836714 C22.2199121,6.4401834 17.7114182,2 12.1099561,2 L12.1099561,2 Z"
  }));
});
Aruba.displayName = 'Aruba';