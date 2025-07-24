"use strict";

exports.__esModule = true;
exports.Inspect = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Inspect = exports.Inspect = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Inspect"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 3H5.5C3.567 3 2 4.567 2 6.5V12.2568C2.95092 11.4716 4.17045 11 5.5 11C7.76565 11 9.71016 12.3704 10.5527 14.3271C10.9642 14.1161 11.4476 14 12 14C12.5521 14 13.035 14.1163 13.4463 14.3271C14.2888 12.3702 16.2342 11 18.5 11C19.8296 11 21.0491 11.4716 22 12.2568V6.5C22 4.567 20.433 3 18.5 3H18C17.4477 3 17 2.55228 17 2C17 1.44772 17.4477 1 18 1H18.5C21.5376 1 24 3.46243 24 6.5V16H23.9766C23.9914 16.1647 24 16.3314 24 16.5C24 19.5376 21.5376 22 18.5 22C15.631 22 13.2761 19.8032 13.0234 17C13 17.0001 13 17.001 13 17.001V17.0107C12.9999 17.0078 13 16.999 12.999 16.9854C12.997 16.9572 12.9922 16.9102 12.9824 16.8516C12.9621 16.7296 12.9231 16.5824 12.8555 16.4473C12.7898 16.3159 12.7071 16.2149 12.6016 16.1445C12.5023 16.0784 12.325 16 12 16C11.675 16 11.4977 16.0784 11.3984 16.1445C11.2929 16.2149 11.2102 16.3159 11.1445 16.4473C11.0769 16.5824 11.0379 16.7296 11.0176 16.8516C11.0078 16.9102 11.003 16.9572 11.001 16.9854L11 17.0107V17.001C11 17.001 11 17.0001 10.9756 17C10.7229 19.8032 8.36896 22 5.5 22C2.46243 22 0 19.5376 0 16.5C0 16.3815 0.0053174 16.2641 0.0126953 16.1475C0.00555643 16.0993 0 16.0502 0 16V6.5C0 3.46243 2.46243 1 5.5 1H6V3ZM5.5 13C3.567 13 2 14.567 2 16.5C2 18.433 3.567 20 5.5 20C7.433 20 9 18.433 9 16.5C9 14.567 7.433 13 5.5 13ZM18.5 13C16.567 13 15 14.567 15 16.5C15 18.433 16.567 20 18.5 20C20.433 20 22 18.433 22 16.5C22 14.567 20.433 13 18.5 13Z",
    fill: "#000"
  }));
});
Inspect.displayName = 'Inspect';