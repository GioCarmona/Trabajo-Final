// 1. Importar dependencias a usar
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

// 2. Configurar el servidor
const app = express();
const puerto = 9000;

// 2.1 Configurar las variables de entorno
dotenv.config();

// 3. Establecer la conexión no nuestro FRONT


// 4. Inicializar el servidor
app.listen(puerto, () => {
    console.log(`El servidor está escuchando en http://localhost:${puerto}`);
});