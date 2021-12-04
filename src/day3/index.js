var fs = require('fs');
var textData = fs.readFileSync("./src/day3/data.txt", 'utf-8');
const getStringArrayFromFile = require('../helpers/getStringArrayFromFile');

const data = getStringArrayFromFile(textData)

const getMostCommonOnIndex = (index, array) => {
    const allNumbersOnIndex = array.map((string) => string.slice(index, index + 1))
    const ones = allNumbersOnIndex.filter((number) => number === '1')
    const zeroes = allNumbersOnIndex.filter((number) => number === '0')
    return ones.length >= zeroes.length ? '1' : '0'
}

const getLeastCommonOnIndex = (index, array) => {
    const allNumbersOnIndex = array.map((string) => string.slice(index, index + 1))
    const ones = allNumbersOnIndex.filter((number) => number === '1')
    const zeroes = allNumbersOnIndex.filter((number) => number === '0')
    return ones.length < zeroes.length ? '1' : '0'
}

const getDecimal = (binary) => parseInt(binary, 2)

const getGammaRate = (array) =>
    getDecimal(Object.values([...Array(array[0].length)].reduce((prev, _, i) => ({ ...prev, [i]: getMostCommonOnIndex(i, array) }), [])).join(''))

const getEpsilonRate = (array) =>
    getDecimal(Object.values([...Array(array[0].length)].reduce((prev, _, i) => ({ ...prev, [i]: getLeastCommonOnIndex(i, array) }), [])).join(''))

const part1 = getGammaRate(data) * getEpsilonRate(data)

const getOxygenGeneratorRating = (array) => getDecimal([...Array(array[0].length)].reduce((prev, _, i) =>
    prev.length === 1 ? prev : prev.filter((number) => number.slice(i, i + 1) === getMostCommonOnIndex(i, prev, true)), array)[0])

const getCO2ScrubberRating = (array) => getDecimal([...Array(array[0].length)].reduce((prev, _, i) =>
    prev.length === 1 ? prev : prev.filter((number) => number.slice(i, i + 1) === getLeastCommonOnIndex(i, prev, false)), array)[0])

const part2 = getOxygenGeneratorRating(data) * getCO2ScrubberRating(data)

console.log({ part1, part2 })