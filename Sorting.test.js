const { expect } = require('chai');
const { sortOddNumbers } = require('./sorting'); // Import the module with your sorting function

describe('sortOddNumbers', () => {
  it('should sort odd numbers while keeping even numbers in place', () => {
    const input = [5, 3, 2, 8, 1, 4]; // Example input array
    const expectedOutput = [1, 3, 2, 8, 5, 4]; // Expected output array after sorting odd numbers

    const result = sortOddNumbers(input);

    expect(result).to.deep.equal(expectedOutput);
  });

  it('should handle empty arrays', () => {
    const input = [];
    const result = sortOddNumbers(input);

    expect(result).to.be.an('array').that.is.empty;
  });

  it('should keep even numbers in place', () => {
    const input = [4, 8, 2, 6]; //Only even numbers
    const result = sortOddNumbers(input);

    expect(result).to.deep.equal(input);
  });

  // Add more test cases
});
