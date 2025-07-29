"use strict";

exports.__esModule = true;
exports.Docker = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Docker = exports.Docker = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Docker"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.94221 14.9002C6.99806 14.9002 7.05128 14.9108 7.10044 14.9298C7.04722 14.9606 7.0111 15.0183 7.0111 15.0843C7.0111 15.1829 7.09099 15.2627 7.18959 15.2627C7.25711 15.2627 7.31571 15.2252 7.34609 15.1698C7.36743 15.2214 7.37939 15.278 7.37939 15.3375C7.37939 15.5789 7.18361 15.7747 6.94221 15.7747C6.70081 15.7747 6.50497 15.5789 6.50497 15.3375C6.50497 15.096 6.70081 14.9002 6.94221 14.9002ZM6.94221 16.0854C6.52979 16.0854 6.1942 15.7499 6.1942 15.3375C6.1942 14.9251 6.52979 14.5895 6.94221 14.5895C7.35458 14.5895 7.6901 14.9251 7.6901 15.3375C7.6901 15.7499 7.35458 16.0854 6.94221 16.0854ZM20.3859 11.1838C18.262 16.8118 13.4653 19.3186 7.81024 19.3186C5.13823 19.3186 3.00656 18.3996 1.64323 16.8672L1.65328 16.8606C2.04609 16.8805 2.39758 16.8873 2.75439 16.8873C3.08065 16.8873 3.39979 16.8838 3.69537 16.8672C3.72109 16.8658 3.75326 16.8622 3.77879 16.8606C3.77903 16.8605 3.86998 16.8546 3.82549 16.8539C4.57667 16.8075 5.15892 16.7031 5.70189 16.5482C5.70201 16.5481 5.70177 16.5483 5.70189 16.5482C5.80055 16.52 5.89659 16.4901 5.98826 16.4584C6.09081 16.4228 6.14511 16.3109 6.10959 16.2083C6.07407 16.1057 5.96219 16.0513 5.85957 16.087C5.16992 16.3259 4.2601 16.4575 3.14505 16.4822C2.57769 16.4947 1.95717 16.4798 1.28451 16.4366C1.14536 16.2508 1.01649 16.0577 0.898691 15.8577L0.71248 15.5172C0.149903 14.4112 -0.0964038 13.1192 0.0343141 11.716H16.3965C17.7407 11.716 19.0535 11.2144 19.6764 10.661C18.5601 9.75332 18.6708 7.59731 19.3822 6.77462C19.9997 7.27076 20.9954 8.31584 20.8241 9.64622C21.6012 9.25563 22.9506 9.0626 24 9.66817C23.3411 10.9542 21.8929 11.3384 20.3859 11.1838ZM2.25508 11.3189H4.46772V9.10613H2.25508V11.3189ZM4.80809 11.3189H7.02096V9.10613H4.80809V11.3189ZM4.80809 8.76576H7.02096V6.55307H4.80809V8.76576ZM7.36127 11.3189H9.57403V9.10613H7.36127V11.3189ZM7.36127 8.76576H9.57403V6.55307H7.36127V8.76576ZM9.91434 11.3189H12.1271V9.10613H9.91434V11.3189ZM9.91434 8.76576H12.1271V6.55307H9.91434V8.76576ZM9.91434 6.21276H12.1271V4H9.91434V6.21276ZM12.4674 11.3189H14.6802V9.10613H12.4674V11.3189Z",
    fill: "#0DB7ED"
  }));
});
Docker.displayName = 'Docker';