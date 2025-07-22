"use strict";

var _metadata = _interopRequireDefault(require("../metadata"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
test('metadata', function () {
  expect(_metadata["default"]).toMatchSnapshot();
});