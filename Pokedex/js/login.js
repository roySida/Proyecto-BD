window.onload = init 


function init(){
    if(!localStorage.getItem("token")){
        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href = "signin2.html"
        })

        document.querySelector('.btn-terciary').addEventListener('click', function(){
            window.location.href = "PaginaInicial2.html"
        })
    
        document.querySelector('.btn-primary').addEventListener('click', login)
    } else {
        window.location.href = "Perfil.html"
    }
}

function login(){
    var correo = document.getElementById('input-mail').value
    var  contraseña = document.getElementById('input-password').value

    axios({
        method: 'post',
        url: 'http://localhost:3000/user/login',
        data: {
            user_correo: correo,
            user_contraseña: contraseña
        }
    }).then(function(res){
        if (res.data.code === 200){
            localStorage.setItem("token", res.data.message)
            window.location.href = "Inicio2.html"
        } else {
            alert(res.data.message)
        }
    }).catch(function(err){
        console.log(err)
    })
    
}