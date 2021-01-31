const express = require ('express');
const app = express();


app.use('/', require('./route/router'));


app.listen(3333, () => console.log('Servidor ativo'));