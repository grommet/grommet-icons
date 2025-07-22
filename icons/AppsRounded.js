"use strict";

exports.__esModule = true;
exports.AppsRounded = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var AppsRounded = exports.AppsRounded = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "AppsRounded"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M3 6.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 3 5.08 3 6.2 3h.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C10 4.52 10 5.08 10 6.2v.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C8.48 10 7.92 10 6.8 10h-.6c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 8.48 3 7.92 3 6.8v-.6zm11 0c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C15.52 3 16.08 3 17.2 3h.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 4.52 21 5.08 21 6.2v.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C19.48 10 18.92 10 17.8 10h-.6c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C14 8.48 14 7.92 14 6.8v-.6zm-11 11c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 14 5.08 14 6.2 14h.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C10 15.52 10 16.08 10 17.2v.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C8.48 21 7.92 21 6.8 21h-.6c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 19.48 3 18.92 3 17.8v-.6zm11 0c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C15.52 14 16.08 14 17.2 14h.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 15.52 21 16.08 21 17.2v.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C19.48 21 18.92 21 17.8 21h-.6c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C14 19.48 14 18.92 14 17.8v-.6z"
  }));
});
AppsRounded.displayName = 'AppsRounded';