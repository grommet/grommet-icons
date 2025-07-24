"use strict";

exports.__esModule = true;
exports.Download = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Download = exports.Download = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Download"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M22 15C22.5523 15 23 15.4478 23 16V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V16C1.00005 15.4478 1.44775 15 2 15C2.55225 15 2.99995 15.4478 3 16V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V16C21 15.4478 21.4477 15 22 15Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 1C12.5523 1 13 1.44772 13 2V12.5859L16.293 9.29297C16.6835 8.90244 17.3165 8.90244 17.707 9.29297C18.0976 9.68349 18.0976 10.3165 17.707 10.707L12.707 15.707C12.3165 16.0976 11.6835 16.0976 11.293 15.707L6.29297 10.707C5.90244 10.3165 5.90244 9.68349 6.29297 9.29297C6.68349 8.90244 7.31651 8.90244 7.70703 9.29297L11 12.5859V2C11 1.44772 11.4477 1 12 1Z",
    fill: "#000"
  }));
});
Download.displayName = 'Download';