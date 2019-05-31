const { log: l } = console

Array.prototype.pluck = function(key) { return this.map( x => x[key]) }

arr1 = ['potato', 'carrot', 'beet']

arr2 = arr1.pluck('length')

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x)

const f1 = ( arr ) => arr.map( x => x * 2)
const f2 = ( arr ) => arr.map( x => x + 2)

const arr3 = [2, 4, 6]

const f3 = (arr) => pipe(f1, f2)(arr)

const arr4 = f3(arr3)
l(arr4)


if (!Array.prototype.flat) {
  Array.prototype.flat = function(depth) {
    var flattend = [];
    (function flat(array, depth) {
      for (let el of array) {
        if (Array.isArray(el) && depth > 0) {
          flat(el, depth - 1); 
        } else {
          flattend.push(el);
        }
      }
    })(this, Math.floor(depth) || 1);
    return flattend;
  };
}

function flatten(array) {
  var flattend = [];
  !(function flat(array) {
    array.forEach(function(el) {
      if (Array.isArray(el)) flat(el);
      else flattend.push(el);
    });
  })(array);
  return flattend;
}

console.time()
arr5 = flatten(arr4.map( x => [[[[x]]]] ))
console.timeEnd()



const arr = Array(10000000).fill().map((_, i) => i + 1)

const subject = 567


function removeFromArray(arr, el) {

	const aux = arr
	aux.splice(arr.findIndex(x => x === el), 1)
    
    return aux
}

console.time('1')

const newarr1 = removeFromArray(arr, subject)

console.timeEnd('1')

console.time('2')

const newarr = arr.filter(x => x !== subject)

console.timeEnd('2')
