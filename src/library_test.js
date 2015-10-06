import Library from './library';

describe('Library', function () {
  beforeEach(function () {
    this.library = new Library();
  });

  it('should be an object', function () {
    expect(typeof this.library).toBe('object');
  });

});
