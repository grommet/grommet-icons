"use strict";

exports.__esModule = true;
exports.LikeOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var LikeOption = exports.LikeOption = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "LikeOption"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.6602 2.45771C14.3731 1.77481 15.4116 1.53667 16.3584 1.85224L16.5068 1.90595C17.9642 2.48691 18.6105 4.20284 17.8994 5.60127L17.8242 5.73994L16.2412 8.45381H19.6387C21.4346 8.45381 22.8148 10.0159 22.6221 11.7761L22.5986 11.947L21.5439 18.2751C21.1421 20.686 19.0555 22.4538 16.6113 22.4538H11.4922C11.1857 22.4538 10.8801 22.4248 10.5791 22.3688L10.2793 22.3044L7.16602 21.5251C6.61985 22.096 5.85243 22.4538 5 22.4538H2C1.44786 22.4538 1.00024 22.0059 1 21.4538C1.00015 20.9016 1.44781 20.4538 2 20.4538H5C5.55214 20.4538 5.99976 20.0059 6 19.4538V11.4538C5.99985 10.9016 5.55219 10.4538 5 10.4538H2C1.44786 10.4538 1.00024 10.0059 1 9.45381C1.00015 8.90165 1.44781 8.45381 2 8.45381H5C5.63058 8.45381 6.21529 8.6488 6.69824 8.98115L9.23242 7.13838C9.62747 6.85105 9.99158 6.52295 10.3184 6.15986L13.5225 2.60029L13.6602 2.45771ZM15.7256 3.7497C15.5022 3.67529 15.259 3.72289 15.0811 3.86982L15.0088 3.93818L11.8047 7.49775C11.3846 7.96448 10.917 8.3862 10.4092 8.75556L7.87402 10.5983C7.95455 10.8694 7.99997 11.1566 8 11.4538V19.4538C7.99999 19.5263 7.99628 19.5984 7.99121 19.6696L10.7646 20.364L10.9443 20.403C11.1249 20.4366 11.3083 20.4538 11.4922 20.4538H16.6113C18.0777 20.4538 19.329 19.3933 19.5703 17.947L20.625 11.6179L20.6377 11.5046C20.6675 10.9414 20.218 10.4538 19.6387 10.4538H12.7588L16.0967 4.73213L16.1318 4.66181C16.2784 4.32736 16.1305 3.93372 15.7998 3.779L15.7256 3.7497Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4.09961 17.4538C4.6518 17.4538 5.09946 17.9016 5.09961 18.4538C5.09937 19.0059 4.65175 19.4538 4.09961 19.4538H4C3.44786 19.4538 3.00024 19.0059 3 18.4538C3.00015 17.9016 3.44781 17.4538 4 17.4538H4.09961Z",
    fill: "#000"
  }));
});
LikeOption.displayName = 'LikeOption';