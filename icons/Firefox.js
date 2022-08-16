"use strict";

exports.__esModule = true;
exports.Firefox = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Firefox = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Firefox"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#E66000",
    fillRule: "evenodd",
    d: "m4.25 1-.145 3.684c.624-.154 1.235-.246 1.83.01 1.291-1.768 3.148-2.376 5.194-2.6l.038.06c-.04.045-.08.089-.122.131a9.473 9.473 0 0 0-1.948 2.847c-.134.306-.166.658-.238.99-.029.129.037.198.168.216.607.083 1.212.18 1.822.25.382.043.769.051 1.154.067.18.008.258.097.262.267.015.684-.213 1.27-.759 1.69a4.414 4.414 0 0 1-1.781.804c-.068.015-.135.035-.208.054l.198 2.515-1.854-.888c-.186.392-.2.78-.082 1.176.316 1.073 1.431 1.695 2.586 1.41.404-.1.795-.27 1.176-.444.376-.17.729-.39 1.096-.583.622-.324 1.249-.296 1.874-.006.09.041.18.095.249.165.234.234.417.503.323.857-.091.342-.34.54-.677.611a2.823 2.823 0 0 1-.594.059c-.132-.001-.202.042-.274.148-.68 1.009-1.562 1.752-2.79 1.964-.517.09-1.05.075-1.576.104-.07.004-.14-.006-.255-.012.07.064.105.104.147.135 1.39 1.027 2.927 1.378 4.614.974 1.381-.33 2.61-.949 3.623-1.965.966-.968 1.408-2.15 1.422-3.496.014-1.353-.288-2.634-.98-3.807-.121-.205-.279-.39-.454-.63 1.19.54 2.24 1.153 2.727 2.42.143-1.582-.148-3.08-.758-4.525-.61-1.444-1.485-2.695-2.682-3.731.05.01.1.018.149.034 2.694.844 4.763 2.45 6.056 4.991.626 1.23.946 2.552 1.111 3.913.177 1.457.156 2.906-.216 4.338-.622 2.398-1.935 4.359-3.753 6.013-1.73 1.574-3.745 2.595-6.052 2.887-5.14.651-9.19-1.198-12.063-5.526C.665 16.849.126 14.92.023 12.859-.144 9.51.61 6.385 2.272 3.478A9.851 9.851 0 0 1 4.049 1.18c.05-.048.102-.093.2-.181"
  }));
});
exports.Firefox = Firefox;
Firefox.displayName = 'Firefox';