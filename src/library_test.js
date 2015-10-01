import Library from './library';

describe('Library', function () {
  it('should be available', function () {
    expect(new Library()).toBeDefined();
  });
});
