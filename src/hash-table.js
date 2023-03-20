export default class HashTable {
  constructor() {
    this.array = [];
  }

  //Hashing algorithm 'HashTable.prototype.hash'
  hash(key) {
    return key.charAt(0).toLowerCase().charCodeAt(0) - 97;
  }

  /* Hash Methods */ 
  //Adds a key-value pair to the Hash Table 
  set(key, value) {  
    const index = this.hash(key);
    if (this.array[index] === undefined) {
      this.array[index] = [];
    } //Then(?)
    this.array[index].push([key, value]);
  }

  //Retrieves a value from the Hash Table
  get(key) {
    const element = this.hash(key);
    const bucket = this.array[element];
    if (bucket != undefined) {
      for (let i=0; i<bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }
    return null;
  }
}