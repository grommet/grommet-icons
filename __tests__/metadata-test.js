"use strict";

var _metadata = _interopRequireDefault(require("../metadata"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('metadata', function () {
  expect(_metadata.default).toMatchSnapshot();
});