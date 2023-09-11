"use strict";

exports.__esModule = true;
exports.Meta = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Meta = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Meta"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#0081FB",
    d: "M2.562 14.676c0-3.929 1.965-8.028 4.27-8.028 1.282 0 2.307.768 3.93 3.074a1702.683 1702.683 0 0 1-2.477 3.844c-2.05 3.245-2.733 3.929-3.844 3.929-1.11.085-1.879-.94-1.879-2.819Zm13.41-1.452-1.452-2.391c-.342-.598-.77-1.196-1.11-1.708 1.28-1.965 2.305-2.99 3.586-2.99 2.563 0 4.613 3.844 4.613 8.627 0 1.793-.598 2.818-1.794 2.818-1.196 0-1.623-.769-3.844-4.356Zm-3.673-5.808C10.419 4.94 8.797 4 6.919 4 2.988 4 0 9.21 0 14.676c0 3.417 1.623 5.552 4.356 5.552 1.964 0 3.33-.94 5.893-5.381 0 0 1.025-1.879 1.794-3.16.256.427.512.854.768 1.366l1.196 2.05c2.306 3.929 3.587 5.21 5.893 5.21 2.648 0 4.1-2.22 4.1-5.722C23.915 8.783 20.84 4 17.167 4c-1.964 0-3.502 1.537-4.868 3.416Z"
  }));
});
exports.Meta = Meta;
Meta.displayName = 'Meta';