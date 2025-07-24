"use strict";

exports.__esModule = true;
exports.UnorderedList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var UnorderedList = exports.UnorderedList = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "UnorderedList"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3.00977 17C3.56205 17 4.00977 17.4477 4.00977 18C4.00977 18.5523 3.56205 19 3.00977 19H3C2.44772 19 2 18.5523 2 18C2 17.4477 2.44772 17 3 17H3.00977ZM21 17C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H7C6.44772 19 6 18.5523 6 18C6 17.4477 6.44772 17 7 17H21ZM3.00977 11C3.56205 11 4.00977 11.4477 4.00977 12C4.00977 12.5523 3.56205 13 3.00977 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H3.00977ZM21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H21ZM3.00977 5C3.56205 5 4.00977 5.44772 4.00977 6C4.00977 6.55228 3.56205 7 3.00977 7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H3.00977ZM21 5C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H7C6.44772 7 6 6.55228 6 6C6 5.44772 6.44772 5 7 5H21Z",
    fill: "#000"
  }));
});
UnorderedList.displayName = 'UnorderedList';