export default class HashTable {
  constructor() {
    this.array = [];
  }

  //Hashing algorithm 'HashTable.prototype.hash'
  hash(key) {
    return key.charAt(0).toLowerCase().charCodeAt(0) - 97;
  }
}