"use strict";

exports.__esModule = true;
exports.Anchor = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Anchor = exports.Anchor = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Anchor"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1C13.6569 1 15 2.34315 15 4C15 5.30574 14.1645 6.413 13 6.8252V9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H13V19.9326C14.8865 19.6749 16.6068 18.6667 18.1621 16.7891C18.058 16.5469 18 16.2803 18 16C18 14.8954 18.8954 14 20 14C21.1046 14 22 14.8954 22 16C22 17.1046 21.1046 18 20 18C19.921 18 19.8432 17.9933 19.7666 17.9844C17.6313 20.5945 15.0429 22 12 22C8.95685 22 6.3679 20.5948 4.23242 17.9844C4.15609 17.9932 4.0787 18 4 18C2.89543 18 2 17.1046 2 16C2 14.8954 2.89543 14 4 14C5.10457 14 6 14.8954 6 16C6 16.2804 5.9411 16.5468 5.83691 16.7891C7.3924 18.667 9.1134 19.6749 11 19.9326V11H9C8.44772 11 8 10.5523 8 10C8 9.44772 8.44772 9 9 9H11V6.8252C9.83548 6.41299 9 5.30574 9 4C9 2.34315 10.3431 1 12 1ZM12 3C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3Z",
    fill: "#000"
  }));
});
Anchor.displayName = 'Anchor';