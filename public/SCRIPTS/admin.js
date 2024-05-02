//Verificar conexión
console.log('Soy admin');
//Función para obtener datos
const mostrarUsuarios = async () => {
    try {
        const respuesta = await fetch('http://localhost:9000/api/obtenerUsuario');
        const usuarios = await respuesta.json();
        console.log(usuarios);
        mostrarTabla(usuarios);
    } catch (error) {
        console.error('Error al obtener los usuarios', error);
    }
}
//Función para crear un afila por cada usuario
function mostrarTabla(usuarios) {
    const tabla = document.getElementById('miTabla');
    tabla.innerHTML = '';

    usuarios.forEach(usuario => {
        //por cada (foreach) va a crear un afila en la tabla
        tabla.innerHTML += `
        <tr>
        <td>${usuario.nombreCompleto}</td>
        <td>${usuario.correoElectronico}</td>
        <td><button type="button" class="btn btn-danger" id="${usuario._id}" onclick="eliminarUsuario(event)">
        <i class="bi bi-trash-fill"></i> Eliminar</button>
        </td>
        </tr>        
        `

    });

}
mostrarUsuarios();

//Función para eliminar usuarios por id

function eliminarUsuario(event){
    console.log('Eliminar');

    const idUsuarioEliminar = event.target.id;
    console.log(idUsuarioEliminar)

    fetch(`http://localhost:9000/api/eliminarUsuario/${idUsuarioEliminar}`, {method:'DELETE'}).then(
        response => {
            if(!response.ok){
                console.error('Error. No se pudo eliminar usuario')

            } else{
            alert('Usuario elminado correctamente');
            mostrarUsuarios();
            }
        }).catch(error =>{
            console.log('Error al eliminar usuario', error);
        });
}