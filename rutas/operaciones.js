const express = require('express');
const { url } = require('inspector');
const router = express.Router();

const formulario = require('../modelos/planilla');

router.get('/', async (req, res)=>{

    const datos = await formulario.find();
    res.json(datos);

});


router.post('/', async (req, res) =>{

    const {  nombre,apellido,empresa,telefono,email,direccion,pais,descripcion  } = req.body;
    const tupla = new formulario({
        nombre:nombre,
        apellido:apellido,
        empresa:empresa,
        telefono:telefono,
        email:email,
        direccion:direccion,
        pais:pais,
        descripcion:descripcion

    });
    await tupla.save();
    res.json({status: 'Data Saved'});

});

module.exports = router;