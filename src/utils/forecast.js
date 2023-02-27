const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7d2677a8ad682a9931ca7ae3466c8d39&query=' + latitude + ', ' + longitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
         if (error){
            callback('Unable to Connect to Location Services Check Network !', undefined)
        }else if (body.error) {
            callback('Unable to find this location.', undefined)
        } else{
            callback(undefined,"Its mostly " + body.current.weather_descriptions[0] + ". It is currently " +
             body.current.temperature + " degree out. The humidity is " + body.current.humidity + "%. Predicting for day ? " + body.current.is_day + " , Observation time of weather report is " + body.current.observation_time + " right now." )
        }
    })
}

module.exports = forecast