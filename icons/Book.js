"use strict";

exports.__esModule = true;
exports.Book = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Book = exports.Book = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Book"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 1C21.6569 1 23 2.34315 23 4V15C23 16.4865 21.9188 17.7199 20.5 17.958V18C19.6716 18 19 18.6716 19 19.5C19 20.3284 19.6716 21 20.5 21H22C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H4.5C2.567 23 1 21.433 1 19.5V4.5C1 2.567 2.567 1 4.5 1H20ZM4.5 18C3.67157 18 3 18.6716 3 19.5C3 20.3284 3.67157 21 4.5 21H17.3369C17.1209 20.5454 17 20.0368 17 19.5C17 18.9632 17.1209 18.4546 17.3369 18H4.5ZM4.5 3C3.67157 3 3 3.67157 3 4.5V16.3359C3.45233 16.1211 3.9584 16.0012 4.49219 16H20C20.5523 16 21 15.5523 21 15V4C21 3.44772 20.5523 3 20 3H14V12.8682L10 10.2012L6 12.8682V3H4.5ZM8 9.13086L10 7.79785L12 9.13086V3H8V9.13086Z",
    fill: "#000"
  }));
});
Book.displayName = 'Book';