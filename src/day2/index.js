var fs = require('fs');
var textData = fs.readFileSync("./src/day2/data.txt", 'utf-8');
const getStringArrayFromFile = require('../helpers/getStringArrayFromFile');

const normalizeData = (dataArray) => dataArray.map((string) => {
    const [direction, steps] = string.split(' ')
    return ({ direction, steps: parseInt(steps, 10) })
})

const data = normalizeData(getStringArrayFromFile(textData))

const getFinalPosition = (movements, startPosition = { posX: 0, posY: 0 }) => {
    let position = startPosition
    movements.forEach(({ direction, steps }) => {
        if (direction === 'up') position.posY += steps
        if (direction === 'down') position.posY -= steps
        if (direction === 'forward') position.posX += steps
    })
    return position
}

const getDepthAndHorizontalPos = ({ posX, posY }) => {
    if (posY > 0) {
        console.log('Looks like your submarine took to the skies')
        return null
    }
    return ({ depth: Math.abs(posY), horizontalPosition: posX })
}

const finalPosition = getFinalPosition(data)
const { depth, horizontalPosition } = getDepthAndHorizontalPos(finalPosition)
const part1 = depth * horizontalPosition

const getFinalPositionWithAim = (movements, startPosition = { posX: 0, depth: 0, aim: 0 }) => {
    let position = startPosition
    movements.forEach(({ direction, steps }) => {
        if (direction === 'down') position.aim += steps
        if (direction === 'up') position.aim -= steps
        if (direction === 'forward') {
            position.posX += steps
            position.depth = position.depth + (position.aim * steps)
        }
    })
    return position
}

const finalPositionWithAim = getFinalPositionWithAim(data)
const part2 = finalPositionWithAim.posX * finalPositionWithAim.depth

console.log({ part1, part2 })