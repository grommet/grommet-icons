"use strict";

exports.__esModule = true;
exports.Android = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Android = exports.Android = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Android"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#A4C639",
    fillRule: "evenodd",
    d: "M5.685 7.914h12.718v10.364c0 .615-.499 1.115-1.114 1.115h-1.274v3.156A1.44 1.44 0 0 1 14.587 24a1.44 1.44 0 0 1-1.43-1.451v-3.156h-2.225v3.156A1.44 1.44 0 0 1 9.502 24a1.44 1.44 0 0 1-1.429-1.451v-3.156H6.8c-.615 0-1.115-.5-1.115-1.115V7.914zm-2.492-.085c-.797 0-1.443.656-1.443 1.466v5.727c0 .808.646 1.465 1.443 1.465s1.443-.657 1.443-1.465V9.295c0-.81-.646-1.466-1.443-1.466zm15.21-.96H5.685C5.842 5.059 7.018 3.5 8.71 2.597L7.5.82a.525.525 0 1 1 .868-.59l1.318 1.936a7.204 7.204 0 0 1 4.717 0L15.721.23a.524.524 0 1 1 .867.59L15.38 2.596c1.692.902 2.866 2.461 3.023 4.274zm-8.338-2.461a.703.703 0 1 0-1.406-.001.703.703 0 0 0 1.406 0zm5.454 0a.704.704 0 1 0-1.408 0 .704.704 0 0 0 1.408 0zm5.378 3.42c-.797 0-1.444.656-1.444 1.466v5.729c0 .81.647 1.466 1.444 1.466.797 0 1.441-.657 1.441-1.466v-5.73c0-.809-.644-1.466-1.441-1.466z"
  }));
});
Android.displayName = 'Android';