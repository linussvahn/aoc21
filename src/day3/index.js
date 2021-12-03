var fs = require('fs');
var textData = fs.readFileSync("./src/day3/data.txt", 'utf-8');
const getStringArrayFromFile = require('../helpers/getStringArrayFromFile');

const data = getStringArrayFromFile(textData)

const getMostCommonOnIndex = (index, array) => {
    const allNumbersOnIndex = array.map((string) => string.slice(index, index + 1))
    const ones = allNumbersOnIndex.filter((number) => number === '1')
    const zeroes = allNumbersOnIndex.filter((number) => number === '0')
    return ones.length > zeroes.length ? '1' : '0'
}

const getLeastCommonOnIndex = (index, array) => {
    const allNumbersOnIndex = array.map((string) => string.slice(index, index + 1))
    const ones = allNumbersOnIndex.filter((number) => number === '1')
    const zeroes = allNumbersOnIndex.filter((number) => number === '0')
    return ones.length < zeroes.length ? '1' : '0'
}

const getDecimal = (binary) => parseInt(binary, 2)

const getGammaRate = (array) => {
    const res = [...Array(array[0].length)].reduce((prev, _, i) => {
        return ({ ...prev, [i]: getMostCommonOnIndex(i, array) })
    }, []);
    return getDecimal(Object.values(res).join(''))
}

const getEpsilon = (array) => {
    const res = [...Array(array[0].length)].reduce((prev, _, i) => {
        return ({ ...prev, [i]: getLeastCommonOnIndex(i, array) })
    }, []);
    return getDecimal(Object.values(res).join(''))
}

const gamma = getGammaRate(data)
const epsilon = getEpsilon(data)

const part1 = gamma * epsilon

console.log({ part1 })