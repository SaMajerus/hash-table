export default class HashTable {
  constructor() {
    this.array = [];
  }

  //Hashing algorithm 'HashTable.prototype.hash'
  hash(key) {
    return key.charAt(0).toLowerCase().charCodeAt(0) - 97;
  }

  set(key, value) {  //Adds a key-value pair to the Hash Table 
    const index = this.hash(key);
    if (this.array[index] === undefined) {
      this.array[index] = [];
    } //Then(?)
    this.array[index].push([key, value]);
  }
}