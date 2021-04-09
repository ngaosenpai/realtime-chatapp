// jwt signing options
const maxAgeAccessToken = 5
const maxAgeRefreshToken = 60 * 60 *  24 * 30

exports.optionAccessToken = {
    expiresIn: maxAgeAccessToken
}

exports.optionRefreshToken = {
    expiresIn: maxAgeRefreshToken
}