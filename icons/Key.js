"use strict";

exports.__esModule = true;
exports.Key = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Key = exports.Key = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Key"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 5C8.10478 5 9 5.89522 9 7C9 8.10478 8.10478 9 7 9C5.89522 9 5 8.10478 5 7C5 5.89522 5.89522 5 7 5Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 1C13.4183 1 17 4.58172 17 9C17 10.06 16.7898 11.0722 16.4141 12L22.4141 18L22.5469 18.1465C22.8386 18.5024 23 18.9499 23 19.4141V21C23 22.1046 22.1046 23 21 23H19.4141C18.9499 23 18.5024 22.8386 18.1465 22.5469L18 22.4141L17.5859 22C17.2109 21.625 17 21.1163 17 20.5859V20C15.8954 20 15 19.1046 15 18H14.4141C13.9499 18 13.5024 17.8386 13.1465 17.5469L13 17.4141L12.002 16.416C11.0741 16.7919 10.0607 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1ZM9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15C10.0944 15 11.1176 14.708 11.999 14.1982C12.477 13.9218 13.0886 14.0847 13.3652 14.5625C13.4603 14.7268 13.5018 14.9071 13.498 15.084L14.4141 16H15C16.1046 16 17 16.8954 17 18C18.1046 18 19 18.8954 19 20V20.5859L19.4141 21H21V19.4141L14.793 13.207C14.7008 13.1149 14.6307 13.0092 14.582 12.8965C14.2546 12.6019 14.1502 12.115 14.3584 11.7031C14.7685 10.892 15 9.9744 15 9C15 5.68629 12.3137 3 9 3Z",
    fill: "#000"
  }));
});
Key.displayName = 'Key';