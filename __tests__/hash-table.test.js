import HashTable from '../src/hash-table.js';

describe('HashTable', () => {

  let hashTable = new HashTable();

  afterEach(() => {
    hashTable = new HashTable();
  });

  test('should instantiate a hash with an empty array', () => {
    expect(hashTable.array).toEqual([]);
  });

  /* Hashing Algorithm tests */ 
  test('should return a number representation of a letter', () => {
    expect(hashTable.hash("Alaric")).toEqual(0);
    expect(hashTable.hash("zygorth")).toEqual(25);
  });
});