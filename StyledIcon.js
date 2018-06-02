'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var StyledIcon = _styledComponents2.default.svg.withConfig({
  displayName: 'StyledIcon'
})(['display:inline-block;flex:0 0 auto;', ' ', ''], function (props) {
  return props.size && props.theme && props.theme.size && props.theme.size[props.size] && '\n    width: ' + props.theme.size[props.size] + ';\n    height: ' + props.theme.size[props.size] + ';\n  ';
}, function (props) {
  return props.color !== 'plain' && '\n    fill: ' + (props.theme.colors && props.theme.colors[props.color] || props.theme.color) + ';\n    stroke: ' + (props.theme.colors && props.theme.colors[props.color] || props.theme.color) + ';\n\n    g {\n      fill: inherit;\n      stroke: inherit;\n    }\n\n    *:not([stroke]) {\n      &[fill="none"] {\n        stroke-width: 0;\n      }\n    }\n\n    *[stroke*="#"],\n    *[STROKE*="#"] {\n      stroke: inherit;\n      fill: none;\n    }\n\n    *[fill-rule],\n    *[FILL-RULE],\n    *[fill*="#"],\n    *[FILL*="#"] {\n      fill: inherit;\n      stroke: none;\n    }\n  ';
});

exports.default = StyledIcon.extend(_templateObject, function (props) {
  return props.theme && props.theme.extend;
});