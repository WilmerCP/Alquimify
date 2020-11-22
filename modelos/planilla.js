const { runInNewContext } = require("vm");
const mongoose = require('mongoose');
const { Schema } = mongoose;

const esquema = new Schema({

    nombre: { type: String, required: true},
    apellido: { type: String, required: true},
    empresa: { type: String, required: true},
    telefono: { type: String, required: true},
    email: { type: String, required: true},
    url: { type: String, required: false},
    pais: { type: String, required: true},
    descripcion: { type: String, required: false}

});

module.exports = mongoose.model('Formulario', esquema);
