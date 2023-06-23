window.onload = init 


function init(){
    if(!localStorage.getItem("token")){
        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href = "login2.html"
        })

        document.querySelector('.btn-terciary').addEventListener('click', function(){
            window.location.href = "PaginaInicial2.html"
        })
    
        document.querySelector('.btn-primary').addEventListener('click', signin)
    } else {
        window.location.href = "Inicio2.html"
    }
}

function signin(){
    var usuarioId = document.getElementById('input-usuario').value
    var nombre = document.getElementById('input-name').value
    var apellidos = document.getElementById('input-apellido').value
    var correo = document.getElementById('input-mail').value
    var contraseña = document.getElementById('input-password').value
    var telefono = document.getElementById('input-telefono').value
    var direccion = document.getElementById('input-direccion').value
    var fecha_nacimiento = document.getElementById('input-nacimiento').value
    var genero = document.getElementById('input-genero').value
    var perfil = document.getElementById('input-perfil').value





    axios({
        method: 'post',
        url: 'http://localhost:3000/user/signin',
        data: {
            user_usuario: usuarioId,
            user_nombre: nombre,
            user_apellidos: apellidos,
            user_correo: correo,
            user_contraseña: contraseña,
            user_telefono: telefono,
            user_direccion: direccion,
            user_fecha_nacimiento: fecha_nacimiento,
            user_perfil: perfil,
            user_genero: genero
        }
    }).then(function(res){
        console.log(res)
        alert("Registro exitoso")
        window.location.href = "inicioSesion.html"
    }).catch(function(err){
        console.log(err)
    })
}