let formulario = document.querySelector('#formulario')
let btnNuevo = document.querySelector('#nuevo')
let btnLogin = document.querySelector('#login')

btnNuevo.addEventListener('click', function() {
    formulario.method='post'
    formulario.action='/registrar'
    formulario.submit()
});



btnLogin.addEventListener('click', function() {
    formulario.method='post'
    formulario.action='/login'
    formulario.submit()
});
