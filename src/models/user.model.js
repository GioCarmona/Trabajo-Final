// Importar las dependencias que necesitamos usar
import mongoose from 'mongoose';
const schema = mongoose.Schema;

// Crear nuestro esquema de datos, que es lo que vamos a guardar en nuestra DB - Estructura
const usuarioSchema = new schema({
    nombreCompleto:{
        type: String,
        required: true
    },
    correoElectronico:{
        type: String,
        required: true
    },
    contrasena:{
        type: String,
        required: true
    }
});
// Se require enviar la plantilla (schema) a la DB.
const usuarioModel = mongoose.model('usuario', usuarioSchema);

//Exportamos el modelo
export default usuarioModel;
