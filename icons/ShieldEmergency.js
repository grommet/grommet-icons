"use strict";

exports.__esModule = true;
exports.ShieldEmergency = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var ShieldEmergency = exports.ShieldEmergency = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "ShieldEmergency"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 5.99917C12.5521 5.99917 12.9996 6.44721 13 6.99917V9.99918H16C16.552 9.99918 16.9996 10.4472 17 10.9992C17 11.5515 16.5523 11.9992 16 11.9992H13V14.9992C13 15.5515 12.5523 15.9992 12 15.9992C11.4477 15.9991 11 15.5514 11 14.9992V11.9992H8C7.44772 11.9992 7 11.5515 7 10.9992C7.0004 10.4472 7.44796 9.99918 8 9.99918H11V6.99917C11.0004 6.44722 11.448 5.9992 12 5.99917Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.8857 0.368315C11.6009 0.0823064 12.3991 0.0823063 13.1143 0.368315L21.1143 3.56851C22.253 4.0241 22.9998 5.12722 23 6.35367V10.9992C23 14.3399 21.0099 16.9905 18.8906 18.8732C16.7572 20.7683 14.3413 22.0243 13.1523 22.5822C12.4183 22.9266 11.5817 22.9266 10.8477 22.5822C9.65868 22.0243 7.24276 20.7683 5.10938 18.8732C2.99013 16.9905 1 14.3399 1 10.9992V6.35367C1.00019 5.12722 1.74704 4.0241 2.88574 3.56851L10.8857 0.368315ZM12.3711 2.22476C12.133 2.12966 11.867 2.12966 11.6289 2.22476L3.62891 5.42496C3.24939 5.57676 3.00019 5.94495 3 6.35367V10.9992C3 13.5029 4.49595 15.6522 6.4375 17.3771C8.36456 19.089 10.5848 20.2497 11.6973 20.7716C11.8931 20.8635 12.1069 20.8635 12.3027 20.7716C13.4152 20.2497 15.6354 19.089 17.5625 17.3771C19.504 15.6522 21 13.5029 21 10.9992V6.35367C20.9998 5.94495 20.7506 5.57676 20.3711 5.42496L12.3711 2.22476Z",
    fill: "#000"
  }));
});
ShieldEmergency.displayName = 'ShieldEmergency';