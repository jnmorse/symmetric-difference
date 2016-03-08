var expect = require('expect.js');
var sym = require('../src');

describe('sym([1, 2, 3], [5, 2, 1, 4])', function() {

  before(function() {
    this.results = sym([1, 2, 3], [5, 2, 1, 4]);
  });

  it('Should return [3, 4, 5]', function() {
    expect(this.results).to.eql([3, 4, 5]);
  });

  it('should contain only three elements.', function() {
    expect(this.results.length).equal(3);
  });

});

describe('sym([1, 2, 5], [2, 3, 5], [3, 4, 5])', function() {

  before(function() {
    this.results = sym(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
  });

  it('Should return [1, 4, 5]', function() {
    expect(this.results).to.eql([1, 4, 5]);
  });

  it('Should contain only three elements.', function() {
    expect(this.results.length).equal(3);
  });
});

describe('sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])', function() {

  before(function() {
    this.results = sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
  });

  it('should return [1, 4, 5].', function() {
    expect(this.results).to.eql([1, 4, 5]);
  });

  it('should contain only three elements.', function() {
    expect(this.results.length).equal(3);
  });

});

describe('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])', function() {

  before(function() {
    this.results = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
  });

  it('should return [2, 3, 4, 6, 7].', function() {
    expect(this.results).to.eql([2, 3, 4, 6, 7]);
  });

  it('should contain only five elements.', function() {
    expect(this.results.length).equal(5);
  });

});

describe('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])', function() {

  before(function() {
    this.results = sym(
      [3, 3, 3, 2, 5],
      [2, 1, 5, 7],
      [3, 4, 6, 6],
      [1, 2, 3],
      [5, 3, 9, 8],
      [1]
    );
  });

  it('should return [1, 2, 4, 5, 6, 7, 8, 9].', function() {
    expect(this.results).to.eql([1, 2, 4, 5, 6, 7, 8, 9]);
  });

  it('should contain only five elements.', function() {
    expect(this.results.length).equal(8);
  });

});
