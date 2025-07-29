"use strict";

exports.__esModule = true;
exports.Onedrive = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Onedrive = exports.Onedrive = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Onedrive"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.6924 13.9867C22.9997 14.1908 24 15.3216 24 16.6863C24 17.7522 23.3892 18.6751 22.4988 19.1255C22.4322 19.1593 22.3639 19.1904 22.2942 19.2187H8.59405C6.85476 19.2078 5.44798 17.7944 5.44798 16.0524C5.44798 14.3037 6.86551 12.8861 8.61421 12.8861C8.70223 12.8861 8.78903 12.8907 8.87512 12.8977C8.87029 12.8172 8.86703 12.7365 8.86703 12.6549C8.86703 10.4662 10.6413 8.69191 12.83 8.69191C14.3676 8.69191 15.6998 9.56831 16.3568 10.8482C16.9003 10.4918 17.5498 10.2838 18.2484 10.2838C20.156 10.2838 21.7023 11.8301 21.7023 13.7377C21.7023 13.8215 21.6982 13.9043 21.6924 13.9867ZM8.18742 12.2086C6.25508 12.4217 4.74712 14.0642 4.74712 16.0524C4.74712 16.8619 4.99921 17.6151 5.42842 18.2378H3.27888C1.468 18.2378 0 16.7698 0 14.9589C0 13.2281 1.34135 11.8115 3.04103 11.6895C2.98429 11.4324 2.9535 11.1656 2.9535 10.8916C2.9535 8.85248 4.60646 7.19964 6.64541 7.19964C7.40977 7.19964 8.11981 7.43181 8.70887 7.82963C9.54543 6.15252 11.2769 5 13.2784 5C15.9223 5 18.0967 7.01021 18.3569 9.58558C18.3207 9.58461 18.2847 9.58292 18.2484 9.58292C17.6798 9.58292 17.1233 9.69822 16.608 9.92013C15.7387 8.71545 14.3463 7.99105 12.83 7.99105C10.4089 7.99105 8.41283 9.84564 8.18742 12.2086Z",
    fill: "#4F8AD8"
  }));
});
Onedrive.displayName = 'Onedrive';