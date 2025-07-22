"use strict";

exports.__esModule = true;
exports.Youtube = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Youtube = exports.Youtube = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Youtube"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#CD201F",
    fillRule: "evenodd",
    d: "M9.522 15.553V8.81l6.484 3.383-6.484 3.36zM23.76 7.641s-.235-1.654-.954-2.382c-.913-.956-1.936-.96-2.405-1.016C17.043 4 12.005 4 12.005 4h-.01s-5.038 0-8.396.243c-.47.055-1.492.06-2.406 1.016C.474 5.987.24 7.641.24 7.641S0 9.584 0 11.525v1.822c0 1.942.24 3.884.24 3.884s.234 1.653.953 2.382c.914.956 2.113.926 2.647 1.026 1.92.184 8.16.241 8.16.241s5.043-.007 8.401-.25c.47-.056 1.492-.061 2.405-1.017.72-.729.954-2.382.954-2.382s.24-1.942.24-3.885v-1.82c0-1.942-.24-3.885-.24-3.885z"
  }));
});
Youtube.displayName = 'Youtube';