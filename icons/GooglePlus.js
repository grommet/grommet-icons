"use strict";

exports.__esModule = true;
exports.GooglePlus = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var GooglePlus = exports.GooglePlus = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "GooglePlus"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.0202538 11.2033C0.0858884 7.29694 3.69606 3.87604 7.62298 4.00636C9.50459 3.91939 11.2734 4.73384 12.7145 5.87784C12.0994 6.57307 11.4625 7.24275 10.782 7.86907C9.04956 6.6781 6.5858 6.33771 4.85335 7.71346C2.37506 9.41849 2.26221 13.4443 4.64607 15.2796C6.9643 17.3723 11.346 16.3333 11.9865 13.1292C10.5345 13.1075 9.07862 13.1292 7.62661 13.0822C7.62298 12.2206 7.61935 11.3589 7.62298 10.4975C10.0504 10.4902 12.4779 10.4864 14.9089 10.5047C15.0545 12.532 14.7852 14.6897 13.5332 16.3658C11.6371 19.0195 7.83052 19.7942 4.86062 18.6575C1.88008 17.5279 -0.23087 14.3963 0.0202538 11.2033ZM19.6437 8.32146H21.8092C21.8128 9.04197 21.8164 9.7661 21.8237 10.4864C22.548 10.4938 23.2759 10.4938 24 10.5011V12.6551C23.2759 12.6624 22.5516 12.666 21.8237 12.6732C21.8164 13.3971 21.8128 14.1176 21.8092 14.8381H19.6401C19.6328 14.1176 19.6328 13.3971 19.6256 12.6768C18.9012 12.6696 18.1736 12.6624 17.4492 12.6551V10.5011C18.1736 10.4938 18.8976 10.4902 19.6256 10.4864C19.6292 9.76249 19.6365 9.04197 19.6437 8.32146Z",
    fill: "#4285F4"
  }));
});
GooglePlus.displayName = 'GooglePlus';