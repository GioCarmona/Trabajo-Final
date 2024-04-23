//Importar dependencias
//Rutas conectan el front (Está en el servidor) con la lógica
import express from 'express';
import { getUsuario, postUsuario, putUsuario, deleteUsuario } from '../controllers/user.controller.js'; 

//Definir una variable que contenga todas las rutas
const usuarioRouter = express.Router();

//Definir las rutas específicas
//Ruta para obtener usuario
usuarioRouter.get('/obtenerUsuario',getUsuario);

//Ruta para crear usuarios
usuarioRouter.post('/crearUsuario',
postUsuario);

//Ruta para modificar usuarios por su ID -> Indentificador único
usuarioRouter.put('/modificarUsuario/:_id',
putUsuario);

//Ruta para eliminar usuarios por si ID -> Identificador único
usuarioRouter.delete('/eliminarUsuario/:_id',
deleteUsuario);

//Exportamos las rutas
export default usuarioRouter;
