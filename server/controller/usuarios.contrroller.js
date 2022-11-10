const Usuarios = require('../model/usuario.model')

const bcrypt = require('bcrypt')


module.exports = {
    acceso: function (req, res) {
        res.render('login',{ errores: [] })
    },

    login: async function (req, res) {
        const body = req.body;

        const user = await Usuarios.users.findOne({ email: body.email });
        if (user) {
            const validPassword = await bcrypt.compare(body.password, user.password);
            if (validPassword) {
                res.render('loginAcceso', {usuario: user, errores:[]})
               
            } else {
                res.render('login', { errores: ["Password Inválida!!"] })
            }
        } else {
            res.render('login', { errores: ["Usuario no se encuentra registrado!!"] })
        }


    },

    nuevo: function (req, res) {
        res.render('registrar', { errores: [] })
    },

    add: async function (req, res) {

        const body = req.body;

        if (!(body.email && body.password)) {
            return res.status(400).send({ error: "Debe ingresar los datos correctamente" });
        }
        const user = new Usuarios.users(body);
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        user.save().then((doc) =>  res.render('registrar-result',{usuario: doc, errores:[]}));
    }

};




