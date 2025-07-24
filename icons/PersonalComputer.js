"use strict";

exports.__esModule = true;
exports.PersonalComputer = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var PersonalComputer = exports.PersonalComputer = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "PersonalComputer"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.9991 2.27686C20.1037 2.27686 20.9991 3.17229 20.9991 4.27686V15.0405L23.17 19.3823L23.2276 19.5073C23.7744 20.8081 22.8222 22.2766 21.3819 22.2769H2.61728C1.13101 22.2763 0.164574 20.7119 0.82919 19.3823L2.99911 15.0425V4.27686C2.99911 3.17258 3.89495 2.27733 4.99911 2.27686H18.9991ZM2.61728 20.2769H8.99911C8.99911 19.7249 9.44723 19.2773 9.99911 19.2769H13.9991L14.1017 19.2817C14.606 19.3329 14.9991 19.759 14.9991 20.2769H21.3819L19.3819 16.2769H4.61728L2.61728 20.2769ZM4.99911 14.2769H18.9991V4.27686H4.99911V14.2769Z",
    fill: "#000"
  }));
});
PersonalComputer.displayName = 'PersonalComputer';