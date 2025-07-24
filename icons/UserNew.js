"use strict";

exports.__esModule = true;
exports.UserNew = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var UserNew = exports.UserNew = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "UserNew"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 15C19.5523 15 20 15.4477 20 16V17.2676L21.0977 16.6338C21.5759 16.3577 22.1877 16.5218 22.4639 17C22.74 17.4783 22.5759 18.0901 22.0977 18.3662L21 19L22.0977 19.6338C22.5759 19.9099 22.74 20.5217 22.4639 21C22.1877 21.4782 21.5759 21.6423 21.0977 21.3662L20 20.7314V22C20 22.5523 19.5523 23 19 23C18.4477 23 18 22.5523 18 22V20.7314L16.9023 21.3662C16.4241 21.6423 15.8123 21.4782 15.5361 21C15.26 20.5217 15.4241 19.9099 15.9023 19.6338L16.999 19L15.9023 18.3662C15.4241 18.0901 15.26 17.4783 15.5361 17C15.8123 16.5218 16.4241 16.3577 16.9023 16.6338L18 17.2676V16C18 15.4477 18.4477 15 19 15Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11 0C14.866 0 18 3.13401 18 7C18 9.26394 16.924 11.2752 15.2568 12.5547C15.6471 12.6691 16.0251 12.8027 16.3887 12.9561C16.8974 13.1707 17.1354 13.7568 16.9209 14.2656C16.7062 14.7744 16.1202 15.0135 15.6113 14.7988C14.3421 14.2633 12.7653 14 11 14C8.61221 14 6.59064 14.4879 5.19531 15.457C3.85234 16.3898 3 17.8262 3 20V21C3 21.5523 2.55228 22 2 22C1.44772 22 1 21.5523 1 21V20C1 17.2032 2.14766 15.139 4.05469 13.8145C4.85042 13.2618 5.76135 12.8504 6.74805 12.5596C5.07783 11.2803 4 9.2664 4 7C4 3.13401 7.13401 0 11 0ZM11 2C8.23858 2 6 4.23858 6 7C6 9.76142 8.23858 12 11 12C13.7614 12 16 9.76142 16 7C16 4.23858 13.7614 2 11 2Z",
    fill: "#000"
  }));
});
UserNew.displayName = 'UserNew';