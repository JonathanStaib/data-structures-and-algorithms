'use strict';

class HashTable {
  constructor(size){
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key){
    let characters = key.split('');

    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  set(key, value){

    let position = this.hash(key);

    let data = {[key] : value};

    if(this.buckets[position]){
      let bucket = this.buckets[position];
      bucket.add(data);
    } else{
      let bucket = data;
      this.buckets[position].push(bucket);
    }
  }

  get(key){
    let position = this.hash(key);

    if(this.buckets[position]){
      let bucket = this.buckets[position];
      return bucket.value;
    }
  }

  keys(){
    let keys = this.buckets.map([position]);
  }

  has(key){
    let position = this.hash(key);

    return this.buckets[position] === true;
  }

  repeatedWord(str) {
    const nonLetterArr = [' ', ',', '.', ';', ':', '-', '_', '!', '?'];
    const table = new HashTable(1024);
    let currentWord = '';

    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i).toLowerCase();
      if (nonLetterArr.includes(char)) {
        if (currentWord.length > 0) {
          if (table.has(currentWord)) {
            return currentWord;
          }
          table.set(currentWord, true);
          currentWord = '';
        }
      } else {
        currentWord += char;
      }
    }
    if (currentWord.length > 0 && table.has(currentWord)) {
      return currentWord;
    }
    return null;
  }
}



const table = new HashTable(1024);

const hashOne = table.hash('Jonny');
const hashTwo = table.hash('Jill');
const hashThree = table.hash('Mike');

console.log('hashOne:', hashOne);
console.log('hashTwo:', hashTwo);
console.log('hashThree:', hashThree);
