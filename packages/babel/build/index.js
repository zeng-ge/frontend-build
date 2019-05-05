"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Test =
/*#__PURE__*/
function () {
  function Test() {
    (0, _classCallCheck2["default"])(this, Test);
    (0, _defineProperty2["default"])(this, "name", "");
  }

  (0, _createClass2["default"])(Test, [{
    key: "say",
    value: function say() {
      log('say');
    }
  }]);
  return Test;
}();