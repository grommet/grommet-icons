"use strict";

exports.__esModule = true;
exports.Opera = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Opera = exports.Opera = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Opera"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#CC0F16",
    fillRule: "evenodd",
    d: "M12.124775,0 C5.56831311,0 1,4.75571037 1,11.888501 C1,18.2355851 5.43849706,24 12.1251037,24 C18.8774638,24 23.3506693,18.2369941 23.3506693,11.888501 C23.3506223,4.69859883 18.621683,0 12.124775,0 L12.124775,0 Z M12.1251037,21.3207828 C11.5820274,21.3207828 11.1100117,21.2149198 10.6996164,21.0221213 C9.55884149,20.4469667 8.87181213,19.1728532 8.46982387,17.6127593 C8.03491194,15.803319 7.98578474,13.6079061 7.98578474,11.6864031 C7.98578474,8.2547319 8.23625832,5.15403523 9.63680626,3.60648141 C10.2479843,2.95679061 11.0537456,2.57222701 12.1121409,2.56936204 C12.1165088,2.56936204 12.1208767,2.5689863 12.1250098,2.5689863 C13.5037182,2.5689863 14.4704814,3.24413307 15.1409315,4.30276321 C16.1404305,5.99107632 16.3679843,8.72707632 16.3679843,11.6711389 C16.3680783,15.8502857 16.0902701,21.3207828 12.1251037,21.3207828 L12.1251037,21.3207828 Z"
  }));
});
Opera.displayName = 'Opera';