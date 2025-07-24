"use strict";

exports.__esModule = true;
exports.Gift = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Gift = exports.Gift = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Gift"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.1846 1C19.4308 1.0001 20.8088 2.72213 20.9258 4.43164C20.964 4.9904 20.8699 5.56925 20.6191 6.09766C21.4205 6.35844 22 7.11164 22 8V11C22 11.7403 21.5978 12.3866 21 12.7324V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V12.7324C2.4022 12.3866 2 11.7403 2 11V8C2 7.0663 2.63976 6.28182 3.50488 6.06152C3.26145 5.55189 3.16129 4.99433 3.18848 4.4502C3.27604 2.69898 4.68664 1 7 1C8.03875 1 8.93544 1.4339 9.65625 1.98828C10.3752 2.54133 10.9741 3.255 11.4443 3.92676C11.6784 4.26116 11.8865 4.59408 12.0674 4.90527C12.2393 4.5968 12.4386 4.26733 12.6641 3.93652C13.5436 2.64616 15.0553 1 17.1846 1ZM5 20C5 20.5523 5.44772 21 6 21H11V13H5V20ZM13 21H18C18.5523 21 19 20.5523 19 20V13H13V21ZM4 11H11V8H4V11ZM13 11H20V8H13V11ZM7 3C5.81344 3 5.22403 3.80107 5.18652 4.5498C5.16768 4.92661 5.28923 5.26943 5.5332 5.51758C5.77117 5.75958 6.21376 6 7 6H10.3906C10.2225 5.70539 10.0262 5.38823 9.80566 5.07324C9.40103 4.49522 8.93708 3.9586 8.4375 3.57422C7.93963 3.19124 7.46107 3 7 3ZM17.1846 3C16.1296 3 15.1408 3.85388 14.3164 5.06348C14.0993 5.38204 13.9092 5.70272 13.748 6H17.1846C17.971 5.99996 18.3943 5.76014 18.6143 5.5293C18.8411 5.29116 18.956 4.95373 18.9297 4.56836C18.8756 3.77798 18.2537 3.00009 17.1846 3Z",
    fill: "#000"
  }));
});
Gift.displayName = 'Gift';