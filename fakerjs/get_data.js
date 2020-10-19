const request = require('request');

request('http://localhost:3004/data', (err, resp, body) => {

    if (err) {
        console.error('request failed');
        console.error(err);
    } else {
        console.log(body);
    }
});