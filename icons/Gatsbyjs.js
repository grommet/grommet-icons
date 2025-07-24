"use strict";

exports.__esModule = true;
exports.Gatsbyjs = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Gatsbyjs = exports.Gatsbyjs = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Gatsbyjs"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#639",
    d: "M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M22,12.0921187 L15.5483871,12.0921187 L15.5483871,13.9264656 L19.9717742,13.9264656 C19.3266129,16.6787886 17.2983871,18.9719229 14.6262097,19.8898991 L4.02701613,9.33979569 C5.13306452,6.12868525 8.26653226,3.83514962 11.8616935,3.83514962 C14.6266129,3.83514962 17.1157258,5.21191322 18.6818548,7.32161278 L20.0649194,6.12948803 C18.2205645,3.65091216 15.2717742,2 11.8616935,2 C7.06895161,2 3.01370968,5.39454513 2,9.89009975 L14.1653226,22 C18.5887097,20.8989905 22,16.8622233 22,12.091316 L22,12.0921187 Z M2,12 C2,14.5927726 3.01847351,17.0923675 4.96305299,19.036947 C6.90763247,20.9815265 9.50040512,22 12,22 L2,12 Z"
  }));
});
Gatsbyjs.displayName = 'Gatsbyjs';