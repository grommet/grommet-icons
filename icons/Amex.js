"use strict";

exports.__esModule = true;
exports.Amex = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Amex = exports.Amex = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Amex"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.31351 11.9651L3.49409 9.96838L2.67934 11.9651H4.31351ZM12.173 14.1264L12.1685 10.2036L10.4325 14.1264H9.3813L7.64078 10.2001V14.1264H5.20576L4.74574 13.0092H2.25301L1.7883 14.1264H0.488007L2.6319 9.11768H4.41065L6.44683 13.8599V9.11768H8.40083L9.96762 12.5155L11.4069 9.11768H13.4002V14.1264H12.173ZM15.3056 13.1015V12.1047H17.934V11.0825H15.3056V10.1717H18.3071L19.6166 11.6317L18.2491 13.1015H15.3056ZM23.4171 14.1456H21.8614L20.3873 12.4871L18.8552 14.1456H14.113V9.13564H18.9282L20.4012 10.7778L21.924 9.13564H23.488L21.1614 11.6406L23.4171 14.1456Z",
    fill: "#002663"
  }));
});
Amex.displayName = 'Amex';