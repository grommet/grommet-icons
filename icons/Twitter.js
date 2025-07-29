"use strict";

exports.__esModule = true;
exports.Twitter = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Twitter = exports.Twitter = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Twitter"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24 4.3086C23.117 4.7006 22.168 4.9646 21.172 5.0836C22.188 4.4746 22.969 3.5096 23.337 2.3596C22.386 2.9246 21.332 3.3336 20.21 3.5556C19.312 2.5976 18.032 1.9996 16.616 1.9996C13.897 1.9996 11.692 4.2046 11.692 6.9236C11.692 7.3096 11.736 7.6856 11.82 8.0456C7.728 7.8406 4.099 5.8806 1.671 2.9006C1.247 3.6286 1.004 4.4736 1.004 5.3766C1.004 7.0846 1.873 8.5926 3.195 9.4756C2.388 9.4486 1.628 9.2276 0.964 8.8596V8.9206C0.964 11.3066 2.661 13.2966 4.914 13.7486C4.501 13.8626 4.065 13.9216 3.617 13.9216C3.299 13.9216 2.991 13.8906 2.69 13.8336C3.317 15.7896 5.135 17.2136 7.29 17.2536C5.604 18.5736 3.481 19.3606 1.175 19.3606C0.777 19.3606 0.385 19.3376 0 19.2926C2.179 20.6886 4.767 21.5046 7.548 21.5046C16.605 21.5046 21.557 14.0016 21.557 7.4946C21.557 7.2816 21.552 7.0696 21.543 6.8586C22.505 6.1636 23.34 5.2966 24 4.3086Z",
    fill: "#1DA1F2"
  }));
});
Twitter.displayName = 'Twitter';