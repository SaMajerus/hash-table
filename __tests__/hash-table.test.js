import HashTable from '../src/hash-table.js';

describe('HashTable', () => {

  let hashTable = new HashTable();

  afterEach(() => {
    hashTable = new HashTable();
  });

  test('should instantiate a hash with an empty array', () => {
    expect(hashTable.array).toEqual([]);
  });
});