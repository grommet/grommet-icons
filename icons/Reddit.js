"use strict";

exports.__esModule = true;
exports.Reddit = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Reddit = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Reddit"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#FF4500",
    fillRule: "evenodd",
    d: "M15.57 15.284c-.897 0-1.65-.728-1.65-1.625s.753-1.648 1.65-1.648c.897 0 1.625.752 1.625 1.649 0 .896-.728 1.624-1.625 1.624m.381 3.153c-.835.835-2.124 1.24-3.939 1.24h-.026c-1.815 0-3.102-.405-3.937-1.24a.655.655 0 1 1 .927-.927c.576.576 1.56.856 3.01.856l.013.001h.013c1.45 0 2.435-.281 3.012-.857a.655.655 0 1 1 .927.927m-9.146-4.778c0-.896.753-1.648 1.649-1.648.897 0 1.624.752 1.624 1.649 0 .896-.727 1.624-1.624 1.624-.896 0-1.649-.728-1.649-1.625M19.998 3.311c.607 0 1.102.494 1.102 1.101s-.495 1.102-1.102 1.102a1.103 1.103 0 0 1-1.102-1.102c0-.607.494-1.101 1.102-1.101M24 11.875a2.887 2.887 0 0 0-2.884-2.884c-.689 0-1.321.243-1.818.647-1.758-1.105-3.99-1.771-6.383-1.912l1.248-3.946 3.43.808a2.415 2.415 0 0 0 2.405 2.237 2.415 2.415 0 0 0 2.412-2.413A2.415 2.415 0 0 0 19.998 2c-.93 0-1.739.53-2.141 1.303l-3.986-.938a.655.655 0 0 0-.774.44l-1.55 4.897c-2.578.063-5.001.732-6.889 1.902a2.87 2.87 0 0 0-1.774-.613A2.887 2.887 0 0 0 0 11.875a2.88 2.88 0 0 0 1.249 2.373 5.063 5.063 0 0 0-.048.693c0 1.988 1.155 3.837 3.254 5.207 2.011 1.313 4.674 2.036 7.496 2.036s5.485-.723 7.497-2.036c2.098-1.37 3.254-3.22 3.254-5.207 0-.213-.015-.424-.04-.633A2.884 2.884 0 0 0 24 11.875"
  }));
});
exports.Reddit = Reddit;
Reddit.displayName = 'Reddit';