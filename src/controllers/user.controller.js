//Importamos dependencias -> Lo que necesitemos para el funcionamiento del código
import usuarioModel from '../models/user.model.js';
/* PETICIONES
    GET -> Muestra usuarios
    POST -> Crear un usuario
    PUT -> Modifica usuarios
    DELETE - > Elimina usuarios
 */
//Prueba inicial
//Lógica para mostrar usuarios
export const getUsuario = async(req, res) => {
    return res.send('Funciona la petición GET');
}
//Lógica para crear usuarios
export const postUsuario = async(req, res) => {
    return res.send('Funciona la petición POST');
}
//Lógica para modificar usuarios
export const putUsuario = async(req, 
    res) => {
    return res.send('Funciona la petición PUT');
}
//Lógica para eliminar usuarios
export const deleteUsuario = async(req, 
    res) => {
    return res.send('Funciona la petición DELETE');
}

