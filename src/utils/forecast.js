const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/25d60a3102304d8e9db84c22f03088bb/'+ latitude + ',' + longitude + '?units=si'
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect weather service!')
        } else if (body.error) {
            callback('Unable to find location!')
        } else {
            callback(undefined, body.daily.data[0].summary + 'The weather is ' + body.currently.temperature + ' celcius and there is a %' + body.currently.precipProbability + ' chance of rain.')
        }
    })
}

module.exports = forecast