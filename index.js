'use strict';

exports.__esModule = true;

var _icons = require('./icons');

Object.keys(_icons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icons[key];
    }
  });
});

var _StyledIcon = require('./StyledIcon');

var _StyledIcon2 = _interopRequireDefault(_StyledIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _StyledIcon2.default;