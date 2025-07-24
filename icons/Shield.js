"use strict";

exports.__esModule = true;
exports.Shield = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Shield = exports.Shield = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Shield"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.8857 0.368319C11.6009 0.0823051 12.3991 0.0823049 13.1143 0.368319L21.1143 3.56851C22.253 4.02411 22.9998 5.12721 23 6.35367V10.9992C23 14.3399 21.0099 16.9905 18.8906 18.8732C16.7572 20.7684 14.3413 22.0243 13.1523 22.5822C12.4183 22.9266 11.5817 22.9266 10.8477 22.5822C9.65869 22.0243 7.24277 20.7684 5.10938 18.8732C2.99013 16.9905 1 14.3399 1 10.9992V6.35367C1.00017 5.12721 1.74703 4.02411 2.88574 3.56851L10.8857 0.368319ZM3.62891 5.42496C3.24938 5.57677 3.00017 5.94494 3 6.35367V10.9992C3 13.5029 4.49594 15.6522 6.4375 17.3771C8.01848 18.7816 9.79803 19.8129 11 20.4269V2.47574L3.62891 5.42496ZM13 20.4269C14.202 19.8129 15.9815 18.7816 17.5625 17.3771C19.5041 15.6522 21 13.5029 21 10.9992V6.35367C20.9998 5.94494 20.7506 5.57677 20.3711 5.42496L13 2.47574V20.4269Z",
    fill: "#000"
  }));
});
Shield.displayName = 'Shield';