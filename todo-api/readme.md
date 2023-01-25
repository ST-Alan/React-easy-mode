Como se ha puesto "type" : "module" en el package.json se puede usar import
Vamos a crear una ruta
Ruta: Es un lugar donde vamos a ver nuestros resultados
URL de falabella
https://falabella.com/pe/falabella-pe
Ruta lo que viene después del dominio principal
Esta es la ruta /falabella-pe
Esta es una ruta /falabella-pe/category/cat780520
Esta es otra ruta /falabella-pe/myaccount/registration

La raíz principal será: /


Ejemplo:
youtube.com
Ruta: /

// Como se ha puesto "type" : "module" en el package.json se puede usar import
import express from "express"

const app = express();

// Esto está creando la ruta en la raíz y luego se reciben dos cosas
// 1.- Request => Es la información que vamos a recibir de quien haga la petición
// 2.- Response => Es lo que vamos a responder al usuairo

app.get("/", (request, response)=>{
    // Vamos a reponder que cuando el usuario entre a la raíz, esta respuesta sea un json
    
    response.json({
        message:"Hola mundo",
    });
})

app.listen(6001,()=>console.log("El servidor inició en el puerto http://localhost:6001"))

// Para poder ver esto desde un navegador vamos a habilitar un puerto de nuestra pc

-----------------------------------------------package.json-------------------------------
{
  "name": "todo-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Author: Alan Fermin | 2023-01-23 15:35:23",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  }
}
 Para crear un comando lo coloco dentro de script, para este archivo se creó el comando start. Sepuede ver en el archivo real, este es para mantener el primer archivo sin modificar, salvo por el "type" : "module"

 Para que el comando node index.js se inicie automáticamente se coloca dentro de script, para este caso con el comando "start" : node index.js

 Para iniciar solo se escribe npm start

 Para que el servidor se reinicie de forma automática se debe instalar nodemon de la siguiente manera:

 npm i nodemon -D

nodemon -D es solo para desarrollo. En el modo producción está mal hecho, es solo para desarrollo. La i es de install

devDependencies es solo para el modo desarrollo | Dependencies es para el modo producción

Ahora start va a ser nodemon index.js, ya no será node

----------------------------------------------------------------------------------------------------------------------------------------
Un navegador solo entra a rutas get, no a rutas post
