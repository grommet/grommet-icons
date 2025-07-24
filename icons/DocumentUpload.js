"use strict";

exports.__esModule = true;
exports.DocumentUpload = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var DocumentUpload = exports.DocumentUpload = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentUpload"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.86914 11.2246C8.26191 10.9043 8.84092 10.9269 9.20703 11.293L11.707 13.793L10.293 15.207L9.5 14.4141V18H7.5V14.4141L6.70703 15.207C6.31651 15.5976 5.68349 15.5976 5.29297 15.207C4.90244 14.8165 4.90244 14.1835 5.29297 13.793L7.79297 11.293L7.86914 11.2246Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5205 1C14.714 1.00005 15.8682 1.42739 16.7744 2.2041L21.2539 6.04395C22.362 6.99385 23 8.38031 23 9.83984V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6C1 3.23858 3.23858 1 6 1H13.5205ZM6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V10H16C14.3431 10 13 8.65685 13 7V3H6ZM15 7C15 7.55228 15.4477 8 16 8H20.3682C20.2453 7.8419 20.1067 7.69403 19.9521 7.56152L15.4727 3.72266C15.3254 3.59641 15.1666 3.48613 15 3.3916V7Z",
    fill: "#000"
  }));
});
DocumentUpload.displayName = 'DocumentUpload';