"use strict";

exports.__esModule = true;
exports.Heroku = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Heroku = exports.Heroku = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Heroku"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.4426 0H3.16169C1.96912 0 1 0.966467 1 2.16169V21.8403C1 23.0335 1.96912 24 3.16169 24H20.4426C21.6355 24 22.6016 23.0335 22.6016 21.8403V2.16169C22.6016 0.966467 21.6355 0 20.4426 0ZM21.4014 21.8403C21.4014 22.3702 20.9721 22.7991 20.4426 22.7991H3.16169C2.63247 22.7991 2.2002 22.3702 2.2002 21.8403V2.16169C2.2002 1.62981 2.63247 1.2002 3.16169 1.2002H20.4426C20.9721 1.2002 21.4014 1.62981 21.4014 2.16169V21.8403ZM6.40037 20.4014L9.10222 18.0003L6.40037 15.5999V20.4014ZM16.1577 10.6723C15.672 10.1839 14.7852 9.60056 13.3022 9.60056C11.675 9.60056 9.99904 10.0245 8.80116 10.4126V3.60123H6.40043V14.0086L8.09698 13.24C8.1252 13.2274 10.8603 12.0013 13.3022 12.0013C14.5203 12.0013 14.7902 12.6719 14.8032 13.2324V20.4014H17.2012V13.2015C17.2039 13.0474 17.1886 11.7158 16.1577 10.6723ZM13.0013 7.5004H15.402C16.4867 6.27165 17.0395 4.96355 17.2015 3.601H14.8031C14.5358 4.96089 13.9445 6.26135 13.0013 7.5004Z",
    fill: "#6762A6"
  }));
});
Heroku.displayName = 'Heroku';