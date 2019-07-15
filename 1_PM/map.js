// Complete the implementation of the following functions so that
// the output is [0, 3, 6, 9, 12]

const arr = [0, 1, 2, 3, 4, 5];

const triple = () => {
  // TODO
  arr2 = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == 0){
      arr2.push(0)
    }else{
      arr2.push(arr[i] * 3)
    }
  }
  return arr2
};

Array.prototype.map = function(fun) {
  // TODO
};

console.log(arr.map(triple));
