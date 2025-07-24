"use strict";

exports.__esModule = true;
exports.Attachment = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Attachment = exports.Attachment = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Attachment"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16.2461 0.689994C17.5831 0.768705 18.8065 1.3929 19.7071 2.29351C20.6076 3.19415 21.232 4.41753 21.3106 5.75445C21.3906 7.11588 20.8988 8.51584 19.7071 9.70757L10.7071 18.7076C10.0153 19.3992 9.1779 19.7036 8.34771 19.6548C7.54207 19.6074 6.81866 19.2331 6.29302 18.7076C5.76741 18.182 5.39321 17.4586 5.34576 16.6529C5.29692 15.8226 5.60128 14.9854 6.29302 14.2935L15.2139 5.37261C15.2397 5.3468 15.2592 5.32633 15.2725 5.31304C15.2791 5.30642 15.2848 5.30176 15.2881 5.29839L15.293 5.29351L15.3692 5.22417C15.762 4.90412 16.3411 4.9275 16.7071 5.29351C17.0729 5.65954 17.0965 6.23871 16.7764 6.6314L16.7071 6.70757L7.70709 15.7076C7.39913 16.0156 7.3282 16.3036 7.34185 16.5357C7.35708 16.7923 7.48289 17.0693 7.70709 17.2935C7.9313 17.5176 8.20832 17.6436 8.4649 17.6587C8.69696 17.6723 8.98509 17.6014 9.29302 17.2935L18.293 8.29351C19.101 7.48549 19.3593 6.63496 19.3145 5.87163C19.2682 5.08374 18.8922 4.30688 18.293 3.70757C17.6938 3.1083 16.9169 2.7325 16.129 2.68609C15.3656 2.6412 14.5152 2.89951 13.7071 3.70757L4.70709 12.7076C3.39911 14.0156 2.9532 15.4286 3.02935 16.7232C3.10707 18.0423 3.73286 19.3193 4.70709 20.2935C5.68133 21.2677 6.95836 21.8936 8.2774 21.9712C9.57192 22.0473 10.985 21.6014 12.293 20.2935L21.293 11.2935L21.3692 11.2242C21.762 10.9041 22.3411 10.9275 22.7071 11.2935C23.0729 11.6595 23.0965 12.2387 22.7764 12.6314L22.7071 12.7076L13.7071 21.7076C12.0153 23.3992 10.0529 24.0786 8.16021 23.9673C6.29207 23.8574 4.56866 22.9831 3.29302 21.7076C2.01741 20.432 1.14322 18.7086 1.03326 16.8404C0.921918 14.9476 1.60129 12.9853 3.29302 11.2935L12.293 2.29351C13.4848 1.10175 14.8847 0.609985 16.2461 0.689994Z",
    fill: "#000"
  }));
});
Attachment.displayName = 'Attachment';