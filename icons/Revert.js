"use strict";

exports.__esModule = true;
exports.Revert = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Revert = exports.Revert = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Revert"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.29002 3.29601C6.67886 2.90393 7.31192 2.90136 7.70408 3.29015C8.09614 3.679 8.09873 4.31206 7.70994 4.70422L5.43357 7.00011H17C19.7614 7.00011 22 9.23869 22 12.0001V16.0001C21.9999 18.7615 19.7614 21.0001 17 21.0001H11C10.4477 21.0001 10 20.5524 9.99998 20.0001C9.99998 19.4478 10.4477 19.0001 11 19.0001H17C18.6568 19.0001 19.9999 17.6569 20 16.0001V12.0001C20 10.3433 18.6568 9.00011 17 9.00011H5.39451L7.70408 11.2902C8.09613 11.679 8.0987 12.3121 7.70994 12.7042C7.32111 13.0962 6.68803 13.0988 6.29588 12.7101L2.29588 8.74523C2.10756 8.55854 2.00117 8.30435 1.99998 8.03918C1.99883 7.77404 2.1034 7.5195 2.29002 7.33117L6.29002 3.29601Z",
    fill: "#000"
  }));
});
Revert.displayName = 'Revert';