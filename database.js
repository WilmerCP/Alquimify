const mongoose = require('mongoose');

const base = 'mongodb+srv://Wilmer:HCqiYV4i3TqFGTUz@cluster0.upn6z.mongodb.net/Formulario?retryWrites=true&w=majority';

// Nos conectamos a la base de datos
mongoose.connect(base, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    })
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.log(err));

module.exports = mongoose;