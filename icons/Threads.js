"use strict";

exports.__esModule = true;
exports.Threads = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Threads = exports.Threads = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Threads"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#000",
    d: "M18.067 11.123a8.547 8.547 0 0 0-.315-.142c-.185-3.414-2.05-5.368-5.182-5.388h-.042c-1.873 0-3.431.8-4.39 2.255L9.86 9.029c.716-1.087 1.84-1.318 2.669-1.318h.028c1.031.006 1.81.306 2.313.89.367.426.612 1.015.733 1.757a13.176 13.176 0 0 0-2.96-.143c-2.977.172-4.892 1.909-4.763 4.322.065 1.223.675 2.277 1.717 2.964.88.582 2.015.866 3.194.802 1.558-.085 2.78-.68 3.632-1.766.647-.825 1.056-1.894 1.237-3.241.742.448 1.292 1.037 1.596 1.745.516 1.205.546 3.184-1.068 4.797-1.415 1.414-3.116 2.025-5.686 2.044-2.851-.02-5.008-.935-6.41-2.717-1.313-1.67-1.991-4.08-2.016-7.165.025-3.085.703-5.496 2.016-7.165 1.402-1.782 3.558-2.696 6.41-2.717 2.871.02 5.065.94 6.521 2.73.714.879 1.252 1.983 1.607 3.27l2.018-.538c-.43-1.585-1.107-2.95-2.027-4.083C18.755 1.2 16.025.024 12.509 0h-.014c-3.51.024-6.208 1.205-8.021 3.51C2.86 5.56 2.028 8.414 2 11.992v.016c.028 3.578.86 6.431 2.474 8.482 1.813 2.305 4.511 3.486 8.02 3.51h.015c3.12-.022 5.319-.838 7.13-2.649 2.371-2.368 2.3-5.336 1.518-7.158-.56-1.307-1.629-2.368-3.09-3.07Zm-5.387 5.065c-1.305.074-2.66-.512-2.728-1.766-.05-.93.662-1.969 2.808-2.092.246-.015.487-.021.724-.021.78 0 1.508.075 2.171.22-.247 3.088-1.697 3.59-2.975 3.66Z"
  }));
});
Threads.displayName = 'Threads';