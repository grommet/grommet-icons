"use strict";

exports.__esModule = true;
exports.Capacity = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Capacity = exports.Capacity = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Capacity"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10 8.27686C11.1046 8.27686 12 9.17229 12 10.2769V14.2769C12 15.3814 11.1046 16.2769 10 16.2769H7C5.89543 16.2769 5 15.3814 5 14.2769V10.2769C5 9.17229 5.89543 8.27686 7 8.27686H10Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 4.27686C19.7614 4.27686 22 6.51543 22 9.27686C23.1046 9.27686 24 10.1723 24 11.2769V13.2769C24 14.3814 23.1046 15.2769 22 15.2769C22 18.0383 19.7614 20.2769 17 20.2769H6C3.23858 20.2769 1 18.0383 1 15.2769V9.27686C1 6.51543 3.23858 4.27686 6 4.27686H17ZM6 6.27686C4.34315 6.27686 3 7.62 3 9.27686V15.2769C3 16.9337 4.34315 18.2769 6 18.2769H17C18.6569 18.2769 20 16.9337 20 15.2769V9.27686C20 7.62 18.6569 6.27686 17 6.27686H6Z",
    fill: "#000"
  }));
});
Capacity.displayName = 'Capacity';