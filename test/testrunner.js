var expect = require('chai').expect;
var techniqueController = require('../api/controllers/techniqueController.js');

class TechniqueCallback {
  constructor() {
    this.result = "failed";
    TechniqueCallback.prototype.send = function (result) {
      this.result = result;
    };
  }
}

describe('techniqueController.get()', function () {
  it('should return a random technique', function () {
    var techniqueCallback = new TechniqueCallback();
    techniqueController.get(null, techniqueCallback);
    console.log(techniqueCallback.result);
    expect(techniqueCallback.result.match(/nage applies.*/).length).to.be.equal(1);
  });
});