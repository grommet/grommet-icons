"use strict";

exports.__esModule = true;
exports.Contact = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Contact = exports.Contact = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Contact"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M8.00977 9C8.56205 9 9.00977 9.44772 9.00977 10C9.00977 10.5523 8.56205 11 8.00977 11H8C7.44772 11 7 10.5523 7 10C7 9.44772 7.44772 9 8 9H8.00977Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.0098 9C12.5621 9 13.0098 9.44772 13.0098 10C13.0098 10.5523 12.5621 11 12.0098 11H12C11.4477 11 11 10.5523 11 10C11 9.44772 11.4477 9 12 9H12.0098Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16.0098 9C16.5621 9 17.0098 9.44772 17.0098 10C17.0098 10.5523 16.5621 11 16.0098 11H16C15.4477 11 15 10.5523 15 10C15 9.44772 15.4477 9 16 9H16.0098Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 1C20.7614 1 23 3.23858 23 6V14C23 16.7614 20.7614 19 18 19H12.3623L8.28027 22.4014C6.97769 23.4868 5.00022 22.5607 5 20.8652V18.9941C2.7733 18.8897 1 17.0523 1 14.7998V6C1 3.23858 3.23858 1 6 1H18ZM6 3C4.34315 3 3 4.34315 3 6V14.7998C3 16.0148 3.98517 17 5.2002 17C6.19415 17.0001 6.9999 17.8058 7 18.7998V20.8652L11.082 17.4639L11.2207 17.3574C11.5546 17.1254 11.953 17 12.3623 17H18C19.6569 17 21 15.6569 21 14V6C21 4.34315 19.6569 3 18 3H6Z",
    fill: "#000"
  }));
});
Contact.displayName = 'Contact';