"use strict";

exports.__esModule = true;
exports.Hpi = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Hpi = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Hpi"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#0096D6",
    fillRule: "evenodd",
    d: "M15.793 15.333a.5.5 0 0 0 .442-.315l2.196-6.37c.06-.173-.04-.315-.225-.315h-1a.502.502 0 0 0-.443.315l-2.206 6.37c-.06.174.041.315.225.315h1.01zM24 12c0 6.627-5.373 12-12 12-.183 0-.36-.02-.542-.027l2.42-6.991a.503.503 0 0 1 .443-.315H16c2.607 0 2.631-.865 2.906-1.66.642-1.862 1.75-5.073 1.964-5.701C21.178 8.41 21.28 7 19.001 7H15a.504.504 0 0 0-.443.315L8.925 23.587C3.79 22.227 0 17.562 0 12 0 6.694 3.448 2.2 8.223.615L2.776 16.351c-.06.174.04.316.224.316h2a.503.503 0 0 0 .443-.316l2.666-7.703a.501.501 0 0 1 .442-.315h.989c.183 0 .284.142.224.315l-2.656 7.703c-.059.174.042.316.225.316h2a.501.501 0 0 0 .442-.316l2.427-7.036C12.765 7.682 12.312 7 10.346 7H9.013c-.183 0-.284-.142-.224-.315L11.086.046C11.39.023 11.691 0 12 0c6.627 0 12 5.373 12 12z"
  }));
});
exports.Hpi = Hpi;
Hpi.displayName = 'Hpi';