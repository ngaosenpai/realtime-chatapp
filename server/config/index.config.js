// jwt signing options
const maxAgeAccessToken = 60 * 5
const maxAgeRefreshToken = 60 * 60 *  24 * 30

exports.optionAccessToken = {
    expiresIn: maxAgeRefreshToken  //Hao modify - keep access for 30days
}

exports.optionRefreshToken = {
    expiresIn: maxAgeRefreshToken
}