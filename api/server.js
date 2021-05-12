const express = require('express');
const app = express();

var currnecyRoute = require('./routes/currnecyRoute');





app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', currnecyRoute);

const port = process.env.PORT || 5000

app.listen(port,()=>console.log('server run :' + port))


module.exports = app;
