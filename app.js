// 1. Importar dependencias a usar
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import conexionMongo from './src/config/db.js';
import usuarioRouter from './src/routes/user.routes.js';

// 2. Configurar el servidor
const app = express();
const puerto = 9000;

// 2.1 Configurar las variables de entorno
dotenv.config();

// 2.2 Configurar coenxión Base de Datos

conexionMongo();

// 3. Establecer la conexión con nuestro FRONT
const rutaPublica = path.join(process.cwd(), 'public');
app.use(express.static(rutaPublica));

app.use(express.json());

app.use('/api', usuarioRouter);

//Especificar que vamos a acceder a nuestro index.html

app.get('/', (req, res) => {
    res.sendFile(path.join(rutaPublica, 'inicioCurso.html'))
});


// 4. Inicializar el servidor
app.listen(puerto, () => {
    console.log(`El servidor está escuchando en http://localhost:${puerto}`);
});


