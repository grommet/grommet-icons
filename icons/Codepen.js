"use strict";

exports.__esModule = true;
exports.Codepen = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Codepen = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Codepen"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#333",
    fillRule: "evenodd",
    d: "M12 22.03c-5.53 0-10.03-4.5-10.03-10.03C1.97 6.47 6.47 1.97 12 1.97c5.53 0 10.03 4.5 10.03 10.03 0 5.53-4.5 10.03-10.03 10.03M12 0C5.372 0 0 5.373 0 12c0 6.628 5.372 12 12 12s12-5.372 12-12c0-6.627-5.372-12-12-12m6.144 13.067L16.55 12l1.595-1.067v2.134zm-5.506 4.524v-2.975l2.764-1.849 2.232 1.493-4.996 3.33zM12 13.509 9.745 12 12 10.492 14.255 12 12 13.51zm-.638 4.082L6.366 14.26l2.232-1.493 2.764 1.85v2.974zm-5.506-6.658L7.45 12l-1.595 1.067v-2.134zm5.506-4.523v2.974l-2.764 1.85L6.366 9.74l4.996-3.33zm1.276 0 4.996 3.33-2.232 1.493-2.764-1.85V6.41zm6.776 3.246-.005-.027a.624.624 0 0 0-.011-.054l-.01-.03a.617.617 0 0 0-.052-.12l-.019-.03a.568.568 0 0 0-.08-.101l-.026-.025a.728.728 0 0 0-.036-.03l-.029-.022-.01-.008-6.782-4.521a.637.637 0 0 0-.708 0l-6.782 4.52-.01.009-.03.022a.578.578 0 0 0-.035.03c-.01.008-.017.016-.026.025a.553.553 0 0 0-.099.13.594.594 0 0 0-.021.043l-.014.03c-.007.016-.012.032-.017.047l-.01.031c-.004.018-.008.036-.01.054l-.006.027a.613.613 0 0 0-.006.083v4.522a.57.57 0 0 0 .006.083l.005.028.011.053.01.031c.005.016.01.031.017.047l.014.03a.755.755 0 0 0 .067.111.422.422 0 0 0 .053.062l.026.025a.545.545 0 0 0 .065.052l.01.008 6.782 4.522a.637.637 0 0 0 .708 0l6.782-4.522.01-.008a.711.711 0 0 0 .065-.052c.01-.008.017-.016.026-.025a.611.611 0 0 0 .032-.034l.021-.028a.568.568 0 0 0 .027-.039l.019-.029a.574.574 0 0 0 .021-.042l.014-.031a.443.443 0 0 0 .017-.047l.01-.03a.628.628 0 0 0 .01-.054l.006-.028a.66.66 0 0 0 .006-.083V9.739a.648.648 0 0 0-.006-.083z"
  }));
});
exports.Codepen = Codepen;
Codepen.displayName = 'Codepen';