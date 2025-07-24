"use strict";

exports.__esModule = true;
exports.UserExpert = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var UserExpert = exports.UserExpert = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "UserExpert"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M21.2305 14.3613C21.5832 13.9363 22.2137 13.8778 22.6387 14.2305C23.0637 14.5832 23.1222 15.2137 22.7695 15.6387L16.2803 23.457L12.3154 19.7285C11.9132 19.3503 11.8934 18.7178 12.2715 18.3154C12.6497 17.9132 13.2822 17.8934 13.6846 18.2715L16.0996 20.542L21.2305 14.3613Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11 0C14.866 0 18 3.13401 18 7C18 9.26394 16.924 11.2752 15.2568 12.5547C15.6471 12.6691 16.0251 12.8027 16.3887 12.9561C16.8974 13.1707 17.1354 13.7568 16.9209 14.2656C16.7062 14.7744 16.1202 15.0135 15.6113 14.7988C14.3421 14.2633 12.7653 14 11 14C8.61221 14 6.59064 14.4879 5.19531 15.457C3.85234 16.3898 3 17.8262 3 20V21C3 21.5523 2.55228 22 2 22C1.44772 22 1 21.5523 1 21V20C1 17.2032 2.14766 15.139 4.05469 13.8145C4.85042 13.2618 5.76135 12.8504 6.74805 12.5596C5.07783 11.2803 4 9.2664 4 7C4 3.13401 7.13401 0 11 0ZM11 2C8.23858 2 6 4.23858 6 7C6 9.76142 8.23858 12 11 12C13.7614 12 16 9.76142 16 7C16 4.23858 13.7614 2 11 2Z",
    fill: "#000"
  }));
});
UserExpert.displayName = 'UserExpert';