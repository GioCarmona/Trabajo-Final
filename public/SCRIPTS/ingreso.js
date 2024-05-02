// Verificar conexión con hmtl
console.log('Hola soy ingreso');
// Crear función
const iniciarSesion = async () => {
    //Obtener valores ingresados por el usuario
    const correoElectronico = document.getElementById('correoElectronico').value;
    const contrasena = document.getElementById('contrasena').value;
    console.log(correoElectronico, contrasena);

    try {
        //Realizar la petición GET a la DB
        const respuesta = await fetch('http://localhost:9000/api/obtenerUsuario')
        const usuarios = await respuesta.json();
        console.log(usuarios);
        //Verificar si se encontró un usuario con el correo y la contraseña
        const esUsuarioRegistrado = usuarios.
            find(usuario => usuario.
                correoElectronico && usuario.
                    contrasena == contrasena);
        if(esUsuarioRegistrado){
            //Verificamos si es Admin
            const correoAdmin = 'admin01@gmail.com';
            if(esUsuarioRegistrado.correoElectronico == correoAdmin){
                alert('Hola Administrador');
                window.location.href = './admin.html'
            }else{
                alert('Ingreso exitoso');
                window.location.href = './inicioCurso.html'
            }

        }else{
            alert('Correo o contraseña incorrectos. Usuario no encontrado. Vuelve a intentar o registrate');
        }
    } catch (error) {
        console.error('Error al verificar inicio de sesión:', error);
    }






}