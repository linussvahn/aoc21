var fs = require('fs');
var text = fs.readFileSync("./src/day1/data.txt", 'utf-8');
const getArrayFromFile = require('../helpers/getArrayFromFile');

const measurements = getArrayFromFile(text)

const part1 = measurements.filter((measurement, i) => measurement > measurements[i - 1]).length

const sum = (inputs) => inputs && inputs.reduce((prev, curr) => prev + curr, 0)

const part2 = measurements.filter((_m, i) => {
    const currentWindow = measurements.slice(i, i + 3)
    const prevWindow = measurements.slice(i - 1, i + 2)
    if (currentWindow.length === 3 && prevWindow.length === 3) {
        return sum(currentWindow) > sum(prevWindow)
    }
}).length

console.log({ part1, part2 })