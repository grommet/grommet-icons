"use strict";

exports.__esModule = true;
exports.ShareOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var ShareOption = exports.ShareOption = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "ShareOption"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 1.27686C20.2091 1.27686 22 3.06772 22 5.27686C22 7.48599 20.2091 9.27686 18 9.27686C16.9441 9.27686 15.9844 8.86708 15.2695 8.19873L12.623 10.1831C12.8659 10.8351 13 11.5402 13 12.2769C13 13.0132 12.8657 13.7179 12.623 14.3696L15.2695 16.354C15.9844 15.6859 16.9444 15.2769 18 15.2769C20.2091 15.2769 22 17.0677 22 19.2769C22 21.486 20.2091 23.2769 18 23.2769C15.7909 23.2769 14 21.486 14 19.2769C14 18.8475 14.0681 18.4341 14.1934 18.0464L11.6133 16.1108C10.5127 17.4337 8.85533 18.2769 7 18.2769C3.68629 18.2769 1 15.5906 1 12.2769C1 8.96315 3.68629 6.27686 7 6.27686C8.85506 6.27686 10.5127 7.11938 11.6133 8.44189L14.1934 6.50635C14.0683 6.11891 14 5.7059 14 5.27686C14 3.06772 15.7909 1.27686 18 1.27686ZM18 17.2769C16.8954 17.2769 16 18.1723 16 19.2769C16 20.3814 16.8954 21.2769 18 21.2769C19.1046 21.2769 20 20.3814 20 19.2769C20 18.1723 19.1046 17.2769 18 17.2769ZM7 8.27686C4.79086 8.27686 3 10.0677 3 12.2769C3 14.486 4.79086 16.2769 7 16.2769C9.20914 16.2769 11 14.486 11 12.2769C11 10.0677 9.20914 8.27686 7 8.27686ZM18 3.27686C16.8954 3.27686 16 4.17229 16 5.27686C16 6.38142 16.8954 7.27686 18 7.27686C19.1046 7.27686 20 6.38142 20 5.27686C20 4.17229 19.1046 3.27686 18 3.27686Z",
    fill: "#000"
  }));
});
ShareOption.displayName = 'ShareOption';