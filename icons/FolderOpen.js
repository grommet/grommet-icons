"use strict";

exports.__esModule = true;
exports.FolderOpen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var FolderOpen = exports.FolderOpen = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "FolderOpen"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.99988 2C7.94414 2 8.8337 2.44479 9.40027 3.2002L11.2001 5.59961L11.2753 5.68945C11.4628 5.8866 11.7244 5.99996 11.9999 6H17.3602C18.7903 6 20.0212 7.00984 20.3016 8.41211L20.4198 9H20.6034C22.4751 9 23.8904 10.6956 23.5555 12.5371L22.2821 19.5371C22.0226 20.9633 20.7806 21.9999 19.3309 22H4.78992C3.26135 21.9999 1.97728 20.8503 1.80847 19.3311L0.252807 5.33105C0.0555177 3.55415 1.44644 2.00016 3.23425 2H6.99988ZM6.66882 11C6.18568 11.0002 5.77186 11.3459 5.68542 11.8213L4.41296 18.8213C4.30143 19.4351 4.77253 20 5.39636 20H19.3309C19.8142 19.9999 20.2279 19.6542 20.3143 19.1787L21.5878 12.1787C21.6992 11.565 21.2272 11 20.6034 11H6.66882ZM3.23425 4C2.63839 4.00016 2.1753 4.51809 2.24109 5.11035L3.23816 14.0957L3.71765 11.4629C3.97718 10.0368 5.21927 9.00016 6.66882 9H18.3798L18.3407 8.80371C18.2471 8.3364 17.8368 8 17.3602 8H11.9999C11.1145 7.99996 10.2778 7.60894 9.70984 6.9375L9.59949 6.7998L7.79968 4.40039C7.61083 4.1486 7.31463 4 6.99988 4H3.23425Z",
    fill: "#000"
  }));
});
FolderOpen.displayName = 'FolderOpen';