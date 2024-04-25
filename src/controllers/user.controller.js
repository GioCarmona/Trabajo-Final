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
/* Mensaje para verificar en la terminal que funciona la petición GET
return res.send('Funciona la petición GET');
}*/
//Manejo de errores
try{
    let usuarios = await usuarioModel.find();
    return res.send(usuarios);
}catch(error){
    return res.json({error: 'Error al mostrar los datos' + error});

}
}
//Lógica para crear usuarios
export const postUsuario = async(req, res) => {
/*  Mensaje para verificar en la terminal que funciona la petición POST
return res.send('Funciona la petición POST');*/
    try{
        let datosUsuario = req.body; 
        let nuevoUsuario = await usuarioModel.create(datosUsuario);
        return res.json(nuevoUsuario);
       }catch(error){
        return res.json({error:'Error al crear el usuario',message:error.message});
       }
}
//Lógica para modificar usuarios
export const putUsuario = async(req, 
    res) => {
/* Mensaje para verificar en la terminal que funciona la petición PUT
return res.send('Funciona la petición PUT');
}*/
   //manejo de errores
   try {
    let datosModificar = req.body;
    let idModificar = req.params._id;
    await usuarioModel.findByIdAndUpdate(idModificar,datosModificar);
    return res.json({message:'Usuario actualizado correctamente'});
   }catch(error){
    return res.json({error:'Error al modificar el usuario', message:error.message});
   }

}
//Lógica para eliminar usuarios
export const deleteUsuario = async(req, 
    res) => {
/* Mensaje para verificar en la terminal que funciona la petición DELETE
return res.send('Funciona la petición DELETE');
}*/
    try {
        let idEliminar = req.params._id;
        let usuarioEliminado = await usuarioModel.findByIdAndDelete(idEliminar);
        if (usuarioEliminado){
            return res.json({message:'Usuario eliminado correctamente'});
        } else{
            return res.json({message:'Ooops no se pudo eliminar el usuario'});
        }
    }catch(error){
     return res.json({error:'Error al eliminar el usuario',message:error.message});
    }
}


