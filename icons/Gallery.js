"use strict";

exports.__esModule = true;
exports.Gallery = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Gallery = exports.Gallery = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Gallery"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 5C8.10457 5 9 5.89543 9 7C9 8.10457 8.10457 9 7 9C5.89543 9 5 8.10457 5 7C5 5.89543 5.89543 5 7 5Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 1C16.4487 1 18.484 2.76074 18.9141 5.08496C21.2388 5.51457 23 7.55087 23 10V18C23 20.7614 20.7614 23 18 23H10C7.55087 23 5.51457 21.2388 5.08496 18.9141C2.76074 18.484 1 16.4487 1 14V6C1 3.23858 3.23858 1 6 1H14ZM19 14C19 16.7614 16.7614 19 14 19H7.17383C7.58594 20.1647 8.69415 21 10 21H18C19.6569 21 21 19.6569 21 18V10C21 8.69415 20.1647 7.58594 19 7.17383V14ZM15.0479 9.60938C14.7007 8.86544 13.6777 8.84704 13.2832 9.51758L13.2129 9.66113L12.2031 12.1846C11.3494 14.3188 8.51117 14.7393 7.0752 12.9443L6.80273 12.6045C6.39886 12.0998 5.62928 12.105 5.23242 12.6152L3.28906 15.1143C3.2729 15.135 3.25472 15.1537 3.2373 15.1729C3.69389 16.247 4.75924 17 6 17H14C15.6569 17 17 15.6569 17 14V13.3652C16.8284 13.2662 16.6839 13.116 16.5938 12.9229L15.0479 9.60938ZM6 3C4.34315 3 3 4.34315 3 6V12.2285L3.6543 11.3877C4.84496 9.85684 7.15273 9.84108 8.36426 11.3555L8.63672 11.6953C9.11526 12.2935 10.0609 12.1533 10.3457 11.4424L11.3555 8.91797L11.4541 8.69629C12.5425 6.47513 15.7831 6.4574 16.8594 8.76367L17 9.06445V6C17 4.34315 15.6569 3 14 3H6Z",
    fill: "#000"
  }));
});
Gallery.displayName = 'Gallery';