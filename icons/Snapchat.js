"use strict";

exports.__esModule = true;
exports.Snapchat = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Snapchat = exports.Snapchat = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Snapchat"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#FFFC00",
    fillRule: "evenodd",
    d: "M12.151 22.532c-.068 0-.133-.003-.182-.005-.04.003-.08.005-.12.005-1.43 0-2.385-.676-3.228-1.272-.604-.427-1.174-.83-1.842-.941a5.947 5.947 0 0 0-.97-.082c-.567 0-1.016.088-1.344.152-.201.039-.375.073-.51.073-.14 0-.311-.031-.383-.275a8.157 8.157 0 0 1-.136-.557c-.098-.447-.169-.72-.336-.746C1.308 18.607.249 18.2.038 17.706A.458.458 0 0 1 0 17.551a.288.288 0 0 1 .241-.3c1.423-.235 2.689-.987 3.762-2.237a8.434 8.434 0 0 0 1.29-2.008c.206-.42.247-.782.122-1.078-.231-.544-.996-.787-1.502-.948a5.405 5.405 0 0 1-.34-.115c-.448-.177-1.186-.551-1.088-1.068.072-.377.57-.64.973-.64.112 0 .211.02.294.06.456.213.865.321 1.217.321.438 0 .65-.167.7-.214a74.562 74.562 0 0 0-.042-.717c-.103-1.636-.231-3.67.29-4.838C7.473.276 10.777.005 11.752.005A249 249 0 0 0 12.236 0c.978 0 4.289.272 5.848 3.767.52 1.168.392 3.205.289 4.842l-.005.078a67.21 67.21 0 0 0-.038.637c.048.044.242.197.635.212.336-.013.722-.12 1.147-.32a.906.906 0 0 1 .375-.074c.15 0 .301.03.428.082l.007.003c.36.128.596.384.601.652.005.25-.181.625-1.097.986a5.552 5.552 0 0 1-.34.116c-.506.16-1.27.403-1.501.947-.126.295-.084.658.123 1.077l.006.014c.064.15 1.605 3.665 5.045 4.231a.288.288 0 0 1 .24.3.462.462 0 0 1-.038.157c-.209.491-1.268.898-3.06 1.175-.169.026-.24.298-.337.743-.04.184-.08.364-.136.553-.053.179-.169.266-.355.266h-.028a2.83 2.83 0 0 1-.51-.065 6.712 6.712 0 0 0-1.345-.142c-.315 0-.64.027-.97.082-.666.11-1.236.513-1.84.94-.844.597-1.8 1.273-3.229 1.273"
  }));
});
Snapchat.displayName = 'Snapchat';