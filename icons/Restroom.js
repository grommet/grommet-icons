"use strict";

exports.__esModule = true;
exports.Restroom = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Restroom = exports.Restroom = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Restroom"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 1.70996C18.5523 1.70996 19 2.15768 19 2.70996C19 3.26225 18.5523 3.70996 18 3.70996V9.70996H20C20.5523 9.70996 21 10.1577 21 10.71C21 11.2622 20.5523 11.71 20 11.71H19.9736C19.8819 13.4768 19.5167 15.3 18.5146 16.7725C17.896 17.6815 17.0666 18.4116 16 18.917V21.71C16.5523 21.71 17 22.1577 17 22.71C17 23.2622 16.5523 23.71 16 23.71H8C7.44772 23.71 7 23.2622 7 22.71C7 22.1577 7.44772 21.71 8 21.71V18.917C6.93343 18.4116 6.10399 17.6815 5.48535 16.7725C4.48334 15.3 4.11809 13.4768 4.02637 11.71H4C3.44772 11.71 3 11.2622 3 10.71C3 10.1577 3.44772 9.70996 4 9.70996H6V6.70996C5.44772 6.70996 5 6.26225 5 5.70996C5 5.15768 5.44772 4.70996 6 4.70996V3.70996C5.44772 3.70996 5 3.26225 5 2.70996C5 2.15768 5.44772 1.70996 6 1.70996H18ZM14 19.5391C13.3871 19.6491 12.7218 19.71 12 19.71C11.2782 19.71 10.6129 19.6491 10 19.5391V21.71H14V19.5391ZM6.02832 11.71C6.11902 13.2473 6.43953 14.6187 7.13965 15.6475C7.93637 16.818 9.34087 17.71 12 17.71C14.6591 17.71 16.0636 16.818 16.8604 15.6475C17.5605 14.6187 17.881 13.2473 17.9717 11.71H6.02832ZM8 4.70996H9C9.55228 4.70996 10 5.15768 10 5.70996C10 6.26225 9.55228 6.70996 9 6.70996H8V9.70996H16V3.70996H8V4.70996Z",
    fill: "#000"
  }));
});
Restroom.displayName = 'Restroom';