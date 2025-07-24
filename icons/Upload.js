"use strict";

exports.__esModule = true;
exports.Upload = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Upload = exports.Upload = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Upload"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M22 15.0003C22.5523 15.0003 23 15.448 23 16.0003V18.0003C22.9999 20.7616 20.7613 23.0003 18 23.0003H6C3.23865 23.0003 1.00012 20.7616 1 18.0003V16.0003C1.00005 15.448 1.44775 15.0003 2 15.0003C2.55225 15.0003 2.99995 15.448 3 16.0003V18.0003C3.00012 19.657 4.34322 21.0003 6 21.0003H18C19.6568 21.0003 20.9999 19.657 21 18.0003V16.0003C21 15.448 21.4477 15.0003 22 15.0003Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.3691 1.22486C11.7619 0.904513 12.3409 0.927107 12.707 1.29322L17.707 6.29322C18.0974 6.68376 18.0975 7.3168 17.707 7.70729C17.3165 8.09766 16.6835 8.09766 16.293 7.70729L13 4.41432V15.0003C12.9999 15.5524 12.5522 16.0003 12 16.0003C11.4478 16.0003 11.0001 15.5524 11 15.0003V4.41432L7.70703 7.70729C7.31654 8.09766 6.68346 8.09766 6.29297 7.70729C5.90248 7.3168 5.90256 6.68376 6.29297 6.29322L11.293 1.29322L11.3691 1.22486Z",
    fill: "#000"
  }));
});
Upload.displayName = 'Upload';