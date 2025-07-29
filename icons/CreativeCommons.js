"use strict";

exports.__esModule = true;
exports.CreativeCommons = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var CreativeCommons = exports.CreativeCommons = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "CreativeCommons"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.9837 0C8.69153 0 5.79448 1.21835 3.55571 3.48973C1.25096 5.82709 0 8.8561 0 12.0163C0 15.2099 1.21797 18.1729 3.52272 20.4773C5.82747 22.782 8.82311 24.033 11.9837 24.033C15.1439 24.033 18.2059 22.782 20.5763 20.4447C22.815 18.2389 24 15.3089 24 12.0163C24 8.75713 22.815 5.79448 20.5433 3.52272C18.2389 1.21797 15.2759 0 11.9837 0ZM12.0163 2.17279C14.7162 2.17279 17.1195 3.1932 18.9958 5.07021C20.8394 6.91348 21.8268 9.34981 21.8268 12.0163C21.8268 14.7158 20.872 17.0865 19.0288 18.8972C17.0861 20.8064 14.5842 21.8272 12.0163 21.8272C9.41579 21.8272 6.97946 20.8068 5.10283 18.9298C3.22619 17.0532 2.17279 14.5842 2.17279 12.0163C2.17279 9.41579 3.22619 6.94685 5.10283 5.03685C6.94647 3.16059 9.31682 2.17279 12.0163 2.17279ZM11.8616 10.0195C11.1828 8.78177 10.0248 8.2892 8.68053 8.2892C6.72388 8.2892 5.16653 9.67326 5.16653 12.0159C5.16653 14.3984 6.6306 15.743 8.74689 15.743C10.1048 15.743 11.2628 14.9975 11.9014 13.8664L10.4108 13.1076C10.0779 13.9058 9.57202 14.1459 8.93345 14.1459C7.82848 14.1459 7.32263 13.2275 7.32263 12.0159C7.32263 10.8052 7.74885 9.88637 8.93345 9.88637C9.25273 9.88637 9.89168 10.0593 10.2644 10.8582L11.8616 10.0195ZM18.7937 10.0195C18.1149 8.78177 16.9568 8.2892 15.6126 8.2892C13.6559 8.2892 12.0986 9.67326 12.0986 12.0159C12.0986 14.3984 13.5627 15.743 15.6789 15.743C17.0368 15.743 18.1949 14.9975 18.8335 13.8664L17.3429 13.1076C17.0099 13.9058 16.5041 14.1459 15.8655 14.1459C14.7605 14.1459 14.2547 13.2275 14.2547 12.0159C14.2547 10.8052 14.6809 9.88637 15.8655 9.88637C16.1848 9.88637 16.8237 10.0593 17.1965 10.8582L18.7937 10.0195Z",
    fill: "#333333"
  }));
});
CreativeCommons.displayName = 'CreativeCommons';