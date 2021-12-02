const getStringArrayFromFile = (text) => {
    try {
        var array = text.split('\n')
        return array
    } catch (error) {
        console.log({ error })
    }
}

module.exports = getStringArrayFromFile