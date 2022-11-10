
const mongoose = require('../config/mongoose.config')

//Generamos un esquema de objeto JSON que almacenaremos
const sessionSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            require: [true, 'email required'],
            unique: [true, 'email exist'],
            match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/]
        },
        password: { type: String, required: [true, 'password: no puede ser vacio'] }
    }, { timestamps: true }
);

//Generamos un esquema de objeto JSON que almacenaremos
const usersSchema = new mongoose.Schema(
    {
        first_name: { type: String, required: [true, 'email: no puede ser vacio'] },
        last_name: { type: String, required: [true, 'password: no puede ser vacio'] },
        email: {
            type: String,
            require: [true, 'email required'],
            unique: [true, 'email exist'],
            match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/]
        },
        password: { type: String, required: [true, 'password: no puede ser vacio'] }
    }, { timestamps: true }
);

// crea un objeto que contenga métodos para que Mongoose interactúe con MongoDB
const sessions = mongoose.model('session', sessionSchema);
const users = mongoose.model('user', usersSchema);

module.exports = ({ sessions, users });