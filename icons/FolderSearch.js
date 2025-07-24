"use strict";

exports.__esModule = true;
exports.FolderSearch = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var FolderSearch = exports.FolderSearch = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "FolderSearch"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M9 2C9.94427 2 10.8338 2.44478 11.4004 3.2002L13.2002 5.59961L13.2754 5.68945C13.463 5.88661 13.7245 6 14 6H20C21.6569 6 23 7.34315 23 9V10.5C23 11.0523 22.5523 11.5 22 11.5C21.4477 11.5 21 11.0523 21 10.5V9C21 8.44771 20.5523 8 20 8H14C13.1146 8 12.2779 7.60895 11.71 6.9375L11.5996 6.7998L9.7998 4.40039C9.61095 4.14858 9.31476 4 9 4H4C3.44772 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20H11.5C12.0523 20 12.5 20.4477 12.5 21C12.5 21.5523 12.0523 22 11.5 22H4C2.34315 22 1 20.6569 1 19V5C1 3.34315 2.34315 2 4 2H9Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C19.258 20 18.5634 19.7974 17.9678 19.4453L15.707 21.707C15.3165 22.0976 14.6835 22.0976 14.293 21.707C13.9024 21.3165 13.9024 20.6835 14.293 20.293L16.5537 18.0312C16.202 17.4359 16 16.7416 16 16C16 13.7909 17.7909 12 20 12ZM20 14C18.8954 14 18 14.8954 18 16C18 17.1046 18.8954 18 20 18C21.1046 18 22 17.1046 22 16C22 14.8954 21.1046 14 20 14Z",
    fill: "#000"
  }));
});
FolderSearch.displayName = 'FolderSearch';