const arr = Array(100000).fill(null).map((x, i) => i + 1)
console.time('map')
const x = arr.map(x => x * 2)
console.log({x})
console.timeEnd('map')

//console.time('slice')
//const len = arr.length

function part(len, num) {

return [0, ...Array(num).fill(null).map((x, i) => len / (num / (i + 1)))]

}
console.time()
const test = part(100, 8)
console.log(test)

function chunk(arr, part) {

return part.map( (x, i) => arr.slice(part[Math.floor(i), Math.floor(i + 1)])

}
const arrtest = Array(100).fill(null).map((x, i) => i + 1)



console.log(lol(arrtest, test))
//function res() {
//const p1 = new Promise(res => res(half1.map(x => x * 2)))
//const p2 = new Promise(res => res(half2.map(x => x * 2)))
//const p3 = new Promise(res => res(half3.map(x => x * 2)))
//const p4 = new Promise(res => res(half4.map(x => x * 2)))
//return Promise.all([p1])
//}
//console.time('slice')
//Promise.all([p1,p2,p3,p4]).then(x => console.log({x}))
//console.timeEnd('slice')

//console.log({arr, half1, half2})