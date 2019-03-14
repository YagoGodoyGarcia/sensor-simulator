function ValoresFloat(min, max) {

    var random = Math.random() * (max - min + 1) + min
    var value = parseFloat(random.toExponential(2))

    return value
}

function ValoresInt(min, max) {
    
    var random = Math.random() * (max - min + 1) + min
    var value = parseInt(random.toExponential(2))

    return value
}

exports.ValoresFloat = ValoresFloat
exports.ValoresInt = ValoresInt