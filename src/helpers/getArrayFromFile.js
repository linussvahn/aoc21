const getArrayFromFile = (text) => {
    try {
        var array = text.split('\n')
        var numArray = array.map((measurement) => parseInt(measurement, 10))
        return numArray
    } catch (error) {
        console.log({ error })
    }
}

module.exports = getArrayFromFile