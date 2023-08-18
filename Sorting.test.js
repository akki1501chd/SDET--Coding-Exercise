const { expect } = require('chai');
const { sortOddNumbers } = require('./sorting');

describe('sortOddNumbers', () => {
  it('should sort odd numbers while keeping even numbers in place', () => {
    const input = [5, 3, 2, 8, 1, 4];
    const expectedOutput = [1, 3, 2, 8, 5, 4];

    const result = sortOddNumbers(input);

    expect(result).to.deep.equal(expectedOutput);
  });

  it('should handle empty arrays', () => {
    const input = [];
    const result = sortOddNumbers(input);

    expect(result).to.be.an('array').that.is.empty;
  });

  it('should keep even numbers in place', () => {
    const input = [4, 8, 2, 6];
    const result = sortOddNumbers(input);

    expect(result).to.deep.equal(input);
  });

  // Add more test cases
});
