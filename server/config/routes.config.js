

module.exports = function (app) {

    const express = require('express');

    //para porde referenciar los contenidos estaticos como imagenes, js, styles
    app.use(express.static(__dirname + '/../../client/static'));

    //carpete de todos los htmls que son interpretados como ejs
    app.set('views', __dirname + '/../../client/views');

    //motor interprete de las vistas
    app.set('view engine', 'ejs');

    //para recuperar campos de formularios
    let bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extends: true }));
    
    const usuariosController = require('../controller/usuarios.contrroller')
    
    app.get('/', function (req, res) {
        usuariosController.acceso(req,res);
    });
    
    app.post('/registrar', function (req, res) {
        usuariosController.nuevo(req,res);
    });
 
    app.post('/add', function (req, res) {
        usuariosController.add(req,res);
    });
 
    app.post('/login', function (req, res) {
        usuariosController.login(req,res);
    });

    // app.post('/mongooses/showedit', function (req, res) {
    //     animalsController.showedit(req,res);
    // })

    // app.post('/mongooses/detail', function (req, res) {
    //     animalsController.detail(req,res);
    // })

   

    // app.post('/mongooses/borrar', function (req, res) {
    //     animalsController.delete(req,res);
    // })

    // app.post('/add', function (req, res) {
    //     animalsController.add(req,res);
    // })

}


