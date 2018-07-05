'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isObject = isObject;
exports.deepMerge = deepMerge;
function isObject(item) {
  return item && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !Array.isArray(item);
}

function deepMerge(target) {
  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  if (!sources.length) {
    return target;
  }
  // making sure to not change target (immutable)
  var output = _extends({}, target);
  sources.forEach(function (source) {
    if (isObject(source)) {
      Object.keys(source).forEach(function (key) {
        if (isObject(source[key])) {
          if (!output[key]) {
            output[key] = _extends({}, source[key]);
          } else {
            output[key] = deepMerge(output[key], source[key]);
          }
        } else {
          output[key] = source[key];
        }
      });
    }
  });
  return output;
}

exports.default = { deepMerge: deepMerge, isObject: isObject };