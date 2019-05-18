const { log, time, timeEnd, group, groupEnd } = console

group('init')

time('initiate')
const arr = Array(1000000).fill({})
let testfor1 = []
let testfor2 = []
let testfor3 = []
let testwhile1 = []
let testforeach1 = []
let testforeach2 = []
let testmap1 = []
let testmap2 = []
timeEnd('initiate')

groupEnd('init')

group('fors')

time('for 1')
for (let i = arr.length - 1; i > -1; i--) {
	testfor1.push(arr[i])
}
timeEnd('for 1')

time('for 2')
for (let j = 0, k = arr.length - 1; j <= k; j++) {
	testfor2.push(arr[j])
}
timeEnd('for 2')

groupEnd('fors')

group('while')
time('while 1')

let l = arr.length
while (l--) {
	testwhile1.push(arr[l])
}
timeEnd('while 1')
groupEnd('while')

group('for each')

time('forEach 1')
arr.forEach(function(x) {
	testforeach1.push(x)
})
timeEnd('forEach 1')

time('forEach 2')
arr.forEach(x => testforeach2.push(x))
timeEnd('forEach 2')

groupEnd('for each')

group('maps')

time('map 1')
testmap1 = arr.map(function(x) {
	return x
})
timeEnd('map 1')

time('map 2')
testmap2 = arr.map(x => x)
timeEnd('map 2')

groupEnd('maps')

group('arrays')
log({ testfor1 })
log({ testfor2 })
log({ testwhile1 })
log({ testforeach1 })
log({ testforeach2 })
log({ testmap1 })
log({ testmap2 })
groupEnd('arrays')
