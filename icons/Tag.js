"use strict";

exports.__esModule = true;
exports.Tag = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Tag = exports.Tag = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Tag"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.29236 12.293C6.68278 11.9025 7.31587 11.9027 7.70642 12.293L11.7064 16.293L10.2924 17.707L6.29236 13.707C5.90223 13.3166 5.90223 12.6834 6.29236 12.293Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M9.29236 9.29297C9.68278 8.90254 10.3159 8.90274 10.7064 9.29297L14.7064 13.293L13.2924 14.707L9.29236 10.707C8.90223 10.3166 8.90223 9.68342 9.29236 9.29297Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M17.9994 4C19.1042 4 19.9994 4.89522 19.9994 6C19.9994 7.10478 19.1042 8 17.9994 8C16.8949 7.99968 15.9994 7.10459 15.9994 6C15.9994 4.89541 16.8949 4.00032 17.9994 4Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.9994 0C22.6562 0 23.9994 1.34315 23.9994 3V10.1719C23.9993 10.9673 23.6839 11.7304 23.1215 12.293L14.5355 20.8789C12.6439 22.7705 9.61348 22.8292 7.65076 21.0557L7.46423 20.8789L3.12146 16.5352C1.16898 14.5826 1.16899 11.4174 3.12146 9.46484L11.7064 0.878906L11.9271 0.679688C12.4609 0.242321 13.1324 5.12204e-05 13.8285 0H20.9994ZM13.8285 2C13.5634 2.00006 13.3089 2.10558 13.1215 2.29297L4.53552 10.8789C3.3641 12.0505 3.3641 13.9496 4.53552 15.1211L8.8783 19.4648L8.9906 19.5713C10.1682 20.635 11.9866 20.5996 13.1215 19.4648L21.7064 10.8789C21.8939 10.6914 21.9993 10.437 21.9994 10.1719V3C21.9994 2.44772 21.5517 2 20.9994 2H13.8285Z",
    fill: "#000"
  }));
});
Tag.displayName = 'Tag';