"use strict";

exports.__esModule = true;
exports.Fedora = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Fedora = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Fedora"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#4F6DB1",
    fillRule: "evenodd",
    d: "M12 0C5.375 0 .005 5.368 0 11.992v9.286A2.728 2.728 0 0 0 2.728 24h9.277C18.63 23.997 24 18.626 24 12c0-6.627-5.373-12-12-12zm4.595 5.577c-.379 0-.517-.073-1.072-.073a2.973 2.973 0 0 0-2.973 2.968v2.583a.42.42 0 0 0 .42.419h1.953c.728 0 1.316.58 1.316 1.31 0 .734-.594 1.312-1.33 1.312H12.55v2.985a5.632 5.632 0 0 1-5.631 5.632c-.472 0-.808-.053-1.245-.167-.637-.167-1.157-.689-1.157-1.296 0-.734.533-1.269 1.33-1.269.378 0 .516.073 1.072.073 1.64 0 2.97-1.328 2.972-2.968v-2.583a.42.42 0 0 0-.42-.419H7.518c-.727 0-1.315-.58-1.315-1.31 0-.735.594-1.312 1.33-1.312H9.89V8.476a5.632 5.632 0 0 1 5.632-5.632c.472 0 .807.054 1.244.168.637.167 1.158.689 1.158 1.296 0 .734-.533 1.269-1.33 1.269z"
  }));
});
exports.Fedora = Fedora;
Fedora.displayName = 'Fedora';