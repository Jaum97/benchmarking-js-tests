function chunk(arr, num) {
	const len = arr.length
        const parts = [0, ...Array(num - 1)
		       .fill(null)
		       .map((x, i) => Math.floor(len/(num/(i + 1))))]
	
        const chunks = parts.map((x, i) => arr.slice(parts[i], parts[i + 1]))
    
	return chunks
}

function createPromises(chunks, fn) {
	const promises = chunks.map(x => new Promise(res => res(x.map(fn))))

	return promises
}

const arr1 = Array(100000).fill(null).map((x, i) => i + 1)

const testfn = ( x ) => x * 2


console.time('map')

const arr2 = arr1.map(testfn)

console.timeEnd('map')


console.time('chunk promise resolve')

const chunks = chunk(arr1, 8)
const promises = createPromises(chunks, testfn)

const result = Promise.all(promises).then(x => x.reduce((acc, cur) => acc.concat(cur),[]))

result.then(x => console.log(x))

console.timeEnd('chunk promise resolve')
