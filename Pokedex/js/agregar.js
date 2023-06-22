window.onload = init
var headers = {}
var url = "http://localhost:3000"

function init(){
    if(localStorage.getItem("token")){
        token = localStorage.getItem("token")
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }

        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href = "inicio2.html"
        })

        document.querySelector('.btn-primary').addEventListener('click', insert)
    } else {
        window.location.href =  "PaginaInicial2.html"
    }
}

function insert(){
    var usuarioId = document.getElementById('usuario_ID').value
    var nombre = document.getElementById('nombre').value
    var apellido = document.getElementById('apellido').value
    var correo = document.getElementById('email').value
    var contraseña = document.getElementById('contraseña').value
    var telefono = document.getElementById('telefono').value
    var direccion = document.getElementById('direccion').value
    var direccion = document.getElementById('fecha_nacimiento').value
    var perfil = document.getElementById('perfil').value
    var genero = document.getElementById('genero').value


    axios.post('http://localhost:3000/proyectodb', {
        user_usuario: usuarioId,
        user_nombre: nombre,
        user_apellido: apellido,
        user_correo: correo,
        user_contraseña: contraseña,
        user_telefono: telefono,
        user_direccion: direccion,
        user_fecha_nacimiento: fecha_nacimiento,
        user_perfil: perfil,
        user_genero: genero
    }, headers).then(function(res){
        console.log(res)
        alert("Empleado registrado correctamente")
        window.location.href = "Inicio2.html"
    }).catch(function(err){
        console.log(err)
    })


    /*axios({
        method: 'post',
        url: 'http://localhost:3000/pokemon',
        data: {
            user_nombre: nombre,
            user_apellido: apellido,
            user_telefono: telefono,
            user_correo: correo,
            user_direccion: direccion
        }
    }).then(function(res){
        //console.log(res)
        alert("Hola")
        window.location.href = "Inicio2.html"
    }).catch(function(err){
        console.log(err)
    })*/
}