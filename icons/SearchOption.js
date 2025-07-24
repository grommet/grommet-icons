"use strict";

exports.__esModule = true;
exports.SearchOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SearchOption = exports.SearchOption = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "SearchOption"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.29301 22.707C1.68354 23.0975 2.31655 23.0975 2.70708 22.707L6.67094 18.7421C8.3949 20.1531 10.5985 20.9999 13 20.9999C18.5229 20.9999 23 16.5228 23 10.9999C23 5.47716 18.5228 0.999988 13 0.999939C7.47722 0.999939 3.00009 5.47713 3.00005 10.9999C3.00005 13.401 3.84643 15.6043 5.25688 17.3281L1.29301 21.2929C0.902491 21.6834 0.902491 22.3164 1.29301 22.707ZM13 18.9999C8.58177 18.9999 5.00005 15.4182 5.00005 10.9999C5.00009 6.5817 8.58179 2.99994 13 2.99994C17.4183 2.99999 21 6.58173 21 10.9999C21 15.4182 17.4183 18.9999 13 18.9999Z",
    fill: "#000"
  }));
});
SearchOption.displayName = 'SearchOption';