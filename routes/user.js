const express = require('express')
const jwt = require('jsonwebtoken')
const user = express.Router()
const db = require('../config/database')

user.post("/signin", async (req, res, next) =>{
    const {user_usuario, user_nombre, user_apellidos, user_correo, user_contraseña, user_telefono, user_direccion, user_fecha_nacimiento, user_perfil, user_genero} = req.body
    if(user_usuario && user_nombre && user_apellidos && user_correo && user_contraseña && user_telefono && user_direccion && user_fecha_nacimiento && user_perfil && user_genero){
        const query = `INSERT INTO usuarios (usuarioID, nombre, apellidos, correo, contraseña, telefono, direccion, fecha_nacimiento, perfil, genero) 
        VALUES(${user_usuario}, '${user_nombre}', '${user_apellidos}', '${user_correo}', '${user_contraseña}', ${user_telefono}, '${user_direccion}', '${user_fecha_nacimiento}', '${user_perfil}',
        '${user_genero}')`
        const rows = await db.query(query) 
        if(rows.affectedRows == 1){
            return res.status(201).json({code: 201, message: "Usuario registrado correctamente"})
        }
        return res.status(500).json({code: 500, message: "Ocurrio un error"})
    }
    return res.status(500).json({code: 500, message: "Campos incompletos"}) 

})


user.post("/login", async (req, res, next) => {
    const{user_mail, user_password} = req.body
    const query = `SELECT * FROM usuarios WHERE correo = '${user_mail}' AND contraseña = '${user_password}'`;
    const rows = await db.query(query)
    
    if(user_mail && user_password){
        if(rows.length == 1){
            const token = jwt.sign({
                user_id: rows[0].user_id,
                user_correo: rows[0].user_correo
            }, "debugkey")
            return res.status(200).json({code: 200, message: token})
        } else {
            return res.status(200).json({code: 401, message: "Usuario y/o contraseña incorrecta idiota"})
        }
    }
    return res.status(500).json({code: 500, message: "Campos incompletos"}) 
    
})

user.get("/", async (req, res, next) => {
    const query = "SELECT * FROM user"
    const rows = await db.query(query)
    return res.status(200).json({code: 200, message: rows})
})

module.exports = user