"use strict";

exports.__esModule = true;
exports.Favorite = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Favorite = exports.Favorite = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Favorite"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.91517 3.90818C4.54679 1.32716 8.53055 1.38403 11.0656 3.95994L11.297 4.20701C11.5633 4.50449 11.7973 4.8195 12.0021 5.14646C12.2644 4.72757 12.5765 4.32889 12.9396 3.95994L13.1818 3.72654C15.7244 1.38309 19.5506 1.42074 22.0636 3.97459L22.298 4.22459C24.5677 6.76173 24.5675 10.4139 22.298 12.9512L22.0636 13.2012L22.006 13.2588C21.9687 13.2967 21.9141 13.3534 21.8429 13.4258C21.7005 13.5705 21.4937 13.7806 21.2365 14.042C20.722 14.5648 20.0051 15.2924 19.1974 16.1133C17.582 17.755 15.6014 19.7685 14.1398 21.2539C12.9643 22.4485 11.0422 22.4478 9.86537 21.2578C8.39994 19.7759 6.40979 17.7696 4.78627 16.1328C3.97463 15.3145 3.25461 14.5885 2.73744 14.0674C2.47905 13.807 2.27126 13.5974 2.12806 13.4531C2.05649 13.381 2.00056 13.3249 1.96303 13.2871L1.90638 13.2304C1.90127 13.2253 1.89576 13.2191 1.89076 13.2138C-0.63099 10.5585 -0.632766 6.49766 1.90248 3.92088L1.91517 3.90818ZM9.63978 5.36326C7.88199 3.57702 5.16672 3.52546 3.32142 5.32908C1.56866 7.11699 1.54404 9.94272 3.33998 11.8349L3.38295 11.8779C3.42049 11.9157 3.47553 11.9719 3.54701 12.0439C3.69025 12.1882 3.89874 12.3976 4.15736 12.6582C4.67458 13.1793 5.39449 13.9053 6.20619 14.7236C7.82979 16.3605 9.82064 18.3685 11.2872 19.8515C11.6815 20.2502 12.3224 20.2496 12.714 19.8515C14.1756 18.3662 16.1561 16.3527 17.7716 14.7109C18.5794 13.89 19.2962 13.1615 19.8107 12.6387C20.0678 12.3774 20.2747 12.1672 20.4171 12.0224C20.4882 11.9502 20.5439 11.8943 20.5812 11.8564C20.5997 11.8377 20.6137 11.8231 20.6232 11.8135L20.6378 11.7988L20.8029 11.623C22.3993 9.84231 22.3992 7.33446 20.8029 5.55369L20.6378 5.37791C18.8892 3.60089 16.2917 3.576 14.5324 5.20115L14.3654 5.36326C13.4547 6.28877 13.0055 7.43207 13.0021 8.5908C13.0005 9.14191 12.5532 9.58782 12.0021 9.58787C11.4511 9.58762 11.0037 9.14179 11.0021 8.5908C10.9988 7.50447 10.6053 6.43144 9.8058 5.53904L9.63978 5.36326Z",
    fill: "#000"
  }));
});
Favorite.displayName = 'Favorite';