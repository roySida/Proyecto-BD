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
    const{user_correo, user_contraseña} = req.body
    const query = `SELECT * FROM usuarios WHERE correo = '${user_correo}' AND contraseña = '${user_contraseña}'`;
    const rows = await db.query(query)
    if(user_correo && user_contraseña){
        if(rows.length == 1){
            const token = jwt.sign({
                usuarioID: rows[0].usuarioID,
                correo: rows[0].correo
            }, "debugkey")
            return res.status(200).json({code: 200, message: token})
        } else {
            return res.status(200).json({code: 401, message: "Usuario y/o contraseña incorrecta"})
        }
    }
    return res.status(500).json({code: 500, message: "Campos incompletos"}) 
    
})

user.get("/", async (req, res, next) => {
    const query = "SELECT * FROM usuarios"
    const rows = await db.query(query)
    return res.status(200).json({code: 200, message: rows})
})

user.put("/", async (req, res, next) => {
    const {user_usuario, user_nombre, user_apellidos, user_correo, user_contraseña, user_telefono, user_direccion, user_fecha_nacimiento, user_perfil, user_genero} = req.body
    if(user_usuario && user_nombre && user_apellidos && user_correo && user_contraseña && user_telefono && user_direccion && user_fecha_nacimiento && user_perfil && user_genero){
        let query = `UPDATE usuarios SET usuarioID = ${user_usuario}, nombre = '${user_nombre}', apellidos = '${user_apellidos}', correo = '${user_correo}', contraseña = '${user_contraseña}', telefono = ${user_telefono}, direccion = '${user_direccion}, fecha_nacimiento = '${user_fecha_nacimiento}', genero = '${user_genero}',' WHERE correo = '${user_correo}';`
        const rows = await db.query(query)
        if (rows.affectedRows == 1){
            return res.status(200).json({code: 200, message: "Empleado actualizado correctamente"})
        }
        return res.status(500).json({code: 500, message: "Ocurrio un error"})
    }

    return res.status(500).json({code: 500, message: "Campos incompletos"})
})

user.get("/", async (req, res, next) => {
    const pkmn = await db.query("SELECT * FROM usuarios")
    return res.status(200).json({code: 200, message: pkmn})
})

user.get("/email/:correo", async (req, res, next) => {
    const correo = req.params.correo
    const pkmn = await db.query("SELECT * FROM usuarios WHERE correo = '" + correo + "';")

    return (pkmn.length > 0) ? res.status(200).json({code: 200, message: pkmn}) : res.status(404).json({code: 404, message: "Empleado no encontrado"})
})

user.get("/:name([A-Za-z]+)", async (req, res, next) => {
    const name = req.params.name
    const pkmn = await db.query("SELECT * FROM usarios WHERE nombre = '" + name + "';")

    return (pkmn.length > 0) ? res.status(200).json({code: 200, message: pkmn}) : res.status(404).json({code: 404, message: "Empleado no encontrado"})
})


module.exports = user