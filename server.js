const express = require('express');
const app = express();

const routes = require('./server/config/routes.config')(app)

//exponemos el servidor en el la ip:puerto requerido
app.listen(5100, function () {
    console.log('servidor ejecutandose en http://localhost:5100');
});