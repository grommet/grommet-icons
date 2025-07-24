"use strict";

exports.__esModule = true;
exports.Directions = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Directions = exports.Directions = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Directions"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18.2969 1.28916C18.6896 0.90094 19.3227 0.904371 19.711 1.29698L22.711 4.33213L22.7774 4.40538C22.922 4.58404 23.0013 4.80826 23 5.04014C22.9984 5.30531 22.8917 5.55978 22.7031 5.7462L19.7031 8.71104C19.3104 9.0991 18.6773 9.09571 18.2891 8.70323C17.9009 8.31054 17.9044 7.67744 18.2969 7.28916L19.6006 6.0001H18C15.2386 6.00012 13 8.23869 13 11.0001V22.0001H11V17.0001C11 14.2387 8.76144 12.0001 6.00001 12.0001H4.39943L5.70314 13.2892C6.09566 13.6774 6.09911 14.3105 5.71095 14.7032C5.3227 15.0957 4.68958 15.0991 4.29689 14.711L1.29689 11.7462C1.1083 11.5598 1.00159 11.3053 1.00001 11.0401C0.998588 10.7752 1.10283 10.5206 1.28908 10.3321L4.28908 7.29698C4.67737 6.90437 5.31043 6.90094 5.70314 7.28916C6.09568 7.67746 6.09915 8.31054 5.71095 8.70323L4.42873 10.0001H6.00001C7.95884 10.0001 9.72948 10.805 11 12.1017V11.0001C11 7.13412 14.134 4.00012 18 4.0001H19.5713L18.2891 2.70323C17.9009 2.31055 17.9044 1.67746 18.2969 1.28916Z",
    fill: "#000"
  }));
});
Directions.displayName = 'Directions';