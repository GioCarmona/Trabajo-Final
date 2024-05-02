// 1. verificar conexión con html
//console.log("Hola soy registro");

// 2. Crear función para registro

const registrarUsuario = async () => {
    // Obtener datos del formulario
    const nombreCompleto = document.getElementById('nombreCompleto').value;

    const correoElectronico = document.getElementById('correoElectronico').value;

    const contrasena = document.getElementById('contrasena').value;

    console.log(nombreCompleto, correoElectronico, contrasena);

    //Crear un objeto con los datos de usuario
    const datosUsuario = {
        nombreCompleto,
        correoElectronico,
        contrasena
    }
    console.log(datosUsuario);

    // Hacer petición POST para crear usuario en la DB
    try {
        // Aca estamos creando el usuario en la DB
        const respuesta = await fetch('http://localhost:9000/api/crearUsuario',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datosUsuario)
            });

            const nuevoUsuario = await respuesta.json();
            console.log('Usuario creado exitosamente', nuevoUsuario);
        // Condicional para redireccionar a ingreso.html
            if(nuevoUsuario){
                alert('Registro exitoso');
                window.location.href = './ingreso.html'
            }else{
                alert('Error de registro, intentelo nuevamente');
            }

    } catch (error) {
        console.error('Error al registrar usuario', error);
    }

}
