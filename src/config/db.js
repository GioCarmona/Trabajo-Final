//Importamos las dependencias que necesitamos
import mongoose from "mongoose";
//Crear una función que nos conecte la base de datos
const conexionMongo = async() => {
    await mongoose.connect(process.env.BD_URL,{})
    //CONTROL DE ERRORES CON TRY - CATCH
    try{
        console.log("Excelente! Conexión exitosa");
    } catch(error){
        console.log("Error de conexión:", error.message);

    }
        
}

//Tenemos que exportar nuestra función para llamarla desde nuestro servidor
export default conexionMongo;