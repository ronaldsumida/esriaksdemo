'use strict';
const express = require('express');
// App
const app = express();
app.get('/', (req, res) => {
 res.send('Hello World');
});
var listener = app.listen(process.env.PORT || 80, function() {
 console.log('listening on port ' + listener.address().port);
});
