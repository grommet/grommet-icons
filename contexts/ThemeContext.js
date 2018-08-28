'use strict';

exports.__esModule = true;
exports.ThemeContext = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _themes = require('../themes');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemeContext = exports.ThemeContext = _react2.default.createContext(_themes.base);

ThemeContext.Extend = function (_ref) {
  var children = _ref.children,
      value = _ref.value;
  return _react2.default.createElement(
    ThemeContext.Consumer,
    null,
    function (theme) {
      return _react2.default.createElement(
        ThemeContext.Provider,
        {
          value: (0, _utils.deepMerge)(theme, value)
        },
        children
      );
    }
  );
};