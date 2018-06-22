var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0-nhwp3.mongodb.net/vipul?retryWrites=true')

.then(() => {

console.log("DB connected")

}, err => {

console.log("DB error")

}

);