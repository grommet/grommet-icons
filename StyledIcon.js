'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var StyledIcon = _styledComponents2.default.svg.withConfig({
  displayName: 'StyledIcon'
})(['display:inline-block;flex:0 0 auto;', ' ', ''], function (_ref) {
  var size = _ref.size,
      theme = _ref.theme;
  return size && theme && theme.size && theme.size[size] && '\n    width: ' + theme.size[size] + ';\n    height: ' + theme.size[size] + ';\n  ';
}, function (_ref2) {
  var color = _ref2.color,
      theme = _ref2.theme;
  return color !== 'plain' && '\n    fill: ' + (color ? theme.colors && theme.colors[color] || color : theme.color) + ';\n    stroke: ' + (color ? theme.colors && theme.colors[color] || color : theme.color) + ';\n\n    g {\n      fill: inherit;\n      stroke: inherit;\n    }\n\n    *:not([stroke]) {\n      &[fill="none"] {\n        stroke-width: 0;\n      }\n    }\n\n    *[stroke*="#"],\n    *[STROKE*="#"] {\n      stroke: inherit;\n      fill: none;\n    }\n\n    *[fill-rule],\n    *[FILL-RULE],\n    *[fill*="#"],\n    *[FILL*="#"] {\n      fill: inherit;\n      stroke: none;\n    }\n  ';
});

exports.default = StyledIcon.extend(_templateObject, function (_ref3) {
  var theme = _ref3.theme;
  return theme && theme.extend;
});