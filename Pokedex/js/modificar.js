window.onload = init 


function init(){
    if(localStorage.getItem("token")){
        token = localStorage.getItem("token")
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        //cargar los datos del empleado con base en su correo
        loadDatos()

        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href = "Inicio2.html"
        })

        document.querySelector('.btn-primary').addEventListener('click', update)
    } else {
        window.location.href = "PaginaInicial2.html"
    }
}

function loadDatos(){
    var correo = localStorage.getItem("correo")
    axios.get("http://localhost:3000/user/email/" + correo, headers).then(function(res){
        //console.log(res)
        //llenamos los input
        var datos = res.data.message
        document.querySelector('#usuario').value = `${datos[0].usuarioID}`
        document.querySelector('#nombre').value = `${datos[0].nombre}`
        document.querySelector('#apellido').value = `${datos[0].apellido}`
        document.querySelector('#correo').value = `${datos[0].correo}`
        document.querySelector('#contraseña').value = `${datos[0].contraseña}`
        document.querySelector('#telefono').value = `${datos[0].telefono}`
        document.querySelector('#direccion').value = `${datos[0].direccion}`
        document.querySelector('#fechaNacimiento').value = `${datos[0].fecha_nacimiento}`
        document.querySelector('#genero').value = `${datos[0].genero}`


    }).catch(function(err){
        console.log(err)
    })
}

function update(){
    var usuarioId = document.getElementById('usuario').value
    var nombre = document.getElementById('nombre').value
    var apellido = document.getElementById('apellido').value
    var correo = document.getElementById('correo').value
    var contraseña = document.getElementById('contraseña').value
    var telefono = document.getElementById('telefono').value
    var direccion = document.getElementById('direccion').value
    var fecha_nacimiento = document.getElementById('fechaNacimiento').value
    var genero = document.getElementById('genero').value



    axios.put('http://localhost:3000/user', {
            user_usuario: usuarioId,
            user_nombre: nombre,
            user_apellido: apellido,
            user_correo: correo,
            user_contraseña: contraseña,
            user_telefono: telefono,
            user_direccion: direccion,
            user_fecha_nacimiento: fecha_nacimiento,
            user_genero: genero

    }, headers).then(function(res){
        console.log(res)
        alert("Modificacion exitosa")
        window.location.href = "Perfil.html"
    }).catch(function(err){
        console.log(err)
    })
}