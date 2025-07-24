"use strict";

exports.__esModule = true;
exports.User = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var User = exports.User = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "User"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1C15.866 1 19 4.13401 19 8C19 10.2644 17.9236 12.2762 16.2559 13.5557C17.2404 13.8442 18.1497 14.2526 18.9443 14.8027C20.8538 16.1247 22 18.1901 22 21V22C22 22.5523 21.5523 23 21 23C20.4477 23 20 22.5523 20 22V21C20 18.8099 19.1462 17.3753 17.8057 16.4473C16.4113 15.4819 14.3904 15 12 15C9.61221 15 7.59064 15.4879 6.19531 16.457C4.85234 17.3898 4 18.8262 4 21V22C4 22.5523 3.55228 23 3 23C2.44772 23 2 22.5523 2 22V21C2 18.2032 3.14766 16.139 5.05469 14.8145C5.85042 14.2618 6.76135 13.8504 7.74805 13.5596C6.07783 12.2803 5 10.2664 5 8C5 4.13401 8.13401 1 12 1ZM12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3Z",
    fill: "#000"
  }));
});
User.displayName = 'User';