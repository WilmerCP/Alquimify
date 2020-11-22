// Documento principal de mi servidor de express.

const express  = require('express');
const servidor = express();
const morgan = require('morgan');
const path =  require('path');
const { mongoose } = require('./database');

//Configuración
servidor.set('port', process.env.PORT || 3000);


//Middlewares
servidor.use(morgan('dev'));
servidor.use(express.json());

//Rutas

servidor.use('/api', require('./rutas/operaciones'));

//Archivos estáticos

servidor.use(express.static(path.join(__dirname, 'public')));

//Empezamos el servidor
servidor.listen(servidor.get('port'), ()=>{

console.log(`Server on port ${servidor.get('port')}`);

});