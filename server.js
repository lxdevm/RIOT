var apiai = require('apiai');
var products = require('./key-data/product.json');

var app = apiai("bf9c7e62eeb84ca28a387a6f9d48b76d");
console.log(products[0].SuplyName);
var request = app.textRequest('Hello!', {
    sessionId: '1'
});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();
