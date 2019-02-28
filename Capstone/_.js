const _ = {

  clamp(a, b, c){
    if(a === Math.min(a,b,c)) return b;
    if(a === Math.max(a,b,c)) return c;
    else { return a; }
  },

  inRange(a, b, c) {
    if(c == null) c = b, b = 0;
    if(b > c) tmp = b, b = c, c = tmp;
    if(a < b) return false;
    if(a >= c) return false;
    else { return true; }
  },

  words(string){
    return string.split(' ');
  },

  pad(string, pad){
    let loop = pad - string.length;
    if(pad <= 0) return string;
    for(let i = 0; i < loop; i++){
        i % 2 === 0 ? string += ' ' :
        string = ' ' + string;
        }
    return string;
  },

  has(object, key){
    if(object[key] !== undefined){ return true; }
    else { return false; }
  },

  invert(object){
  for(let key in object){
    let tmpVal = key;
    key = object[key]; object[key] = tmpVal;
    delete object[tmpVal];
    }
  return object;
  },

  findKey(object, predicate){
    for(let key in object){
      if(predicate(object[key])) {
        return key;
      }

    return undefined;
    }
  },

  drop(array, dropThisMany = 1){
    return array.slice(dropThisMany);
  },

  dropWhile(array, predicate){
    let dropNumber = array.
      findIndex(function (element, index){
        if(!predicate(element, index, array)) return true;
      })

    return this.drop(array, dropNumber);
  },

  chunk(array, chunkSize = 1){
    chunkedArray = [];
    while(array.length != 0){
      chunkedArray.
      push(array.splice(0, chunkSize));
      }
    return chunkedArray;
  }
}

// Do not write or modify code below this line.
module.exports = _;
